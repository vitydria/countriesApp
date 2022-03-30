import { Component } from '@angular/core';
import { Country } from '../../interfaces/country.interface';
import { CountryService } from '../../services/country.service';

@Component({
  selector: 'app-by-country',
  templateUrl: './by-country.component.html',
  styles: [],
})
export class ByCountryComponent {
  term: string = '';
  error: boolean = false;
  countries: Country[] = [];

  constructor(private countryService: CountryService) {}

  search(term: string): void {
    this.error = false;
    this.term = term;
    this.countryService.searchCountry(this.term).subscribe(
      (resp) => {
        this.countries = resp;
      },
      (err) => {
        console.log('Error');
        console.info(err);
        this.error = true;
        this.countries = [];
      }
    );
  }

  suggestions(term: string) {
    this.error = false;
  }
}
