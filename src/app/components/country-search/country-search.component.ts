import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-country-search',
  templateUrl: './country-search.component.html',
  styleUrls: ['./country-search.component.scss']
})
export class CountrySearchComponent implements OnInit {

  constructor(private router: Router) { }
  countryName:string = '';
  ngOnInit(): void {
  }

  onSearchCountry(){
    this.router.navigate(['country-list',this.countryName]);
  }
}
