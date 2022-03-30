import { Component } from '@angular/core';
import { Country } from '../../interfaces/country.interface';
import { CountryService } from '../../services/country.service';

@Component({
  selector: 'app-by-country',
  templateUrl: './by-country.component.html',
  styles: [
    `
      li {
        cursor: pointer;
      }
    `,
  ],
})
export class ByCountryComponent {
  term: string = '';
  error: boolean = false;
  countries: Country[] = [];
  suggestedCountries: Country[] = [];
  showSuggestions: boolean = false;

  constructor(private countryService: CountryService) {}

  search(term: string): void {
    this.showSuggestions = false;
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
    this.showSuggestions = true;
    this.term = term;
    this.error = false;
    this.countryService.searchCountry(term).subscribe(
      (countries) => (this.suggestedCountries = countries.splice(0, 5)),
      (err) => (this.suggestedCountries = [])
    );

    console.log(this.suggestedCountries);
  }

  searchSuggested(term: string) {
    this.search(term);
  }
}
