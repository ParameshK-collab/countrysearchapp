import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class CountryService {
  baseUrl: string = "https://restcountries.eu/rest/v2/";
  constructor(private http: HttpClient) { }

  getCountryList(countryName: string) {
    return this.http.get(this.baseUrl + "name/" + countryName);
  }

  getCountryDetail(countryName: string) {
    return this.http.get(this.baseUrl + "name/" + countryName + "?fullText=true");
  }
}
