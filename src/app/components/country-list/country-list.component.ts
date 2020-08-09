import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';
import { CountryDetail } from '../../modules/country-detail';
import { CountryService } from '../../services/country.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-country-list',
  templateUrl: './country-list.component.html',
  styleUrls: ['./country-list.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class CountryListComponent implements OnInit {
  countryDetail: CountryDetail[];
  countryName: string = null;
  constructor(private countryService: CountryService, private route:ActivatedRoute, private router:Router) { 
    this.countryName = this.route.snapshot.params['name'];
  }

  ngOnInit(): void {
    if (this.countryName != null) {
      this.countryService.getCountryList(this.countryName).subscribe((data:CountryDetail[]) => {
        this.countryDetail = data;
      });
    }
  }

  goBackToCountrySearch(){
    this.router.navigate(['/']);
  }
}
