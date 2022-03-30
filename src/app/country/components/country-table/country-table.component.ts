import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Country } from '../../interfaces/country.interface';

@Component({
  selector: 'app-country-table',
  templateUrl: './country-table.component.html',
  styles: [],
})
export class CountryTableComponent {
  constructor() {}
  @Input()
  countries: Country[] = [];
}
