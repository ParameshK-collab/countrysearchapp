import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CountryService } from 'src/app/services/country.service';
import { CountryDetail } from 'src/app/modules/country-detail';

@Component({
  selector: 'app-country-detail',
  templateUrl: './country-detail.component.html',
  styleUrls: ['./country-detail.component.scss']
})
export class CountryDetailComponent implements OnInit {
  countryName: string;
  countryDetail: CountryDetail;
  constructor(private route: ActivatedRoute, private router: Router, private countryService: CountryService) {
    this.countryName = this.route.snapshot.paramMap.get("name");
    if (this.countryName != null) {
      this.countryService.getCountryDetail(this.countryName).subscribe((data: CountryDetail) => {
        this.countryDetail = data[0];
      })
    }
  }

  ngOnInit(): void {

  }

  goBackToCountrySearch() {
    this.router.navigate(['']);
  }
}
