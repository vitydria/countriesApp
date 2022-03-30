import { Component } from '@angular/core';
import { Country } from '../../interfaces/country.interface';
import { CountryService } from '../../services/country.service';

@Component({
  selector: 'app-by-region',
  templateUrl: './by-region.component.html',
  styles: [
    `
      button {
        margin-right: 5px;
      }
    `,
  ],
})
export class ByRegionComponent {
  countries: Country[] = [];
  regions: string[] = [
    'eu',
    'efta',
    'caricom',
    'pa',
    'au',
    'usan',
    'eeu',
    'al',
    'asean',
    'cais',
    'cefta',
    'nafta',
    'saarc',
  ];
  activeRegion: string = '';

  constructor(private countryService: CountryService) {}

  activatingRegion(region: string) {
    if (this.activeRegion === region) return;
    this.activeRegion = region;
    this.countries = [];
    this.countryService.getCountriesByRegion(this.activeRegion).subscribe(
      (resp) => {
        this.countries = resp;
        console.log(resp);
      },
      (err) => {
        console.log('Error');
        console.info(err);
        this.countries = [];
      }
    );
  }

  getStyleClass(region: string): string {
    return region === this.activeRegion
      ? 'btn btn-primary'
      : 'btn btn-outline-primary';
  }
}
