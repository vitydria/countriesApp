import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Country } from '../interfaces/country.interface';

@Injectable({
  providedIn: 'root',
})
export class CountryService {
  private apiURL: string = 'https://restcountries.com/v3.1';
  constructor(private http: HttpClient) {}

  searchCountry(args: string): Observable<Country[]> {
    const url = `${this.apiURL}/name/${args}`;
    return this.http.get<Country[]>(url);
  }
  searchCapital(args: string): Observable<Country[]> {
    const url = `${this.apiURL}/capital/${args}`;
    return this.http.get<Country[]>(url);
  }

  getCountryById(id: string): Observable<Country> {
    const url = `${this.apiURL}/alpha/${id}`;
    return this.http.get<Country>(url);
  }
}
