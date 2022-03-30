import { Component, ComponentFactoryResolver, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CountryService } from '../../services/country.service';
import { switchMap, tap } from 'rxjs/operators';
import { Country } from '../../interfaces/country.interface';

@Component({
  selector: 'app-see-country',
  templateUrl: './see-country.component.html',
  styles: [],
})
export class SeeCountryComponent implements OnInit {
  country!: Country;

  constructor(
    private activatedRoute: ActivatedRoute,
    private countryService: CountryService
  ) {}
  ngOnInit(): void {
    this.activatedRoute.params
      .pipe(
        switchMap((param) => this.countryService.getCountryById(param['id'])),
        tap(console.log)
      )
      .subscribe((country) => {
        this.country = country[0];
        console.log(country);
      });
    /*  this.activatedRoute.params.subscribe(({ id }) => {
      console.log(id);
      this.countryService.getCountryById(id).subscribe((country) => {
        console.log(country);
      });
    }); */
  }
}
