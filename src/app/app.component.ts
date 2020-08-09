import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'CountryInformation';
  constructor(private router: Router) {

  }
  onSearchCountry(countryName) {
    this.router.navigate(['country-list', countryName]);
  }
}
