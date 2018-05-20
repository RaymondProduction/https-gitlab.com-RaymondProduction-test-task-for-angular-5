import { Component, OnInit } from '@angular/core';

import { CountryService } from '../../services/country.service';
import { ICountry } from '../../interfaces/icountry';

@Component({
  selector: 'app-country',
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.css']
})
export class CountryComponent implements OnInit {

  country: ICountry;

  constructor(private countryService: CountryService) {
    this.country = this.countryService.country;
  }

  ngOnInit() {
    this.countryService.get().subscribe(
      (country) => {
        this.country = country;
      }
    );
  }

}
