import { Injectable } from '@angular/core';
import { Meta } from '@angular/platform-browser';

import { ICountries } from '../interfaces/icountries';
import { ICountry } from '../interfaces/icountry';

import { Observable } from 'rxjs/Observable';

@Injectable()
export class CountryService {

  private countries: ICountries;
  country: ICountry;
  call: Function;
  listenerCountry: Observable<ICountry>;


  constructor(public meta: Meta) {

    this.countries = JSON.parse(this.meta.getTag('name=countries').content);

    this.listenerCountry  = new Observable<ICountry>(observer => {
      this.call = ((data) => {
        observer.next(this.country);
      });
    });
  }

  setCode(code: string) {
    this.country = this.countries[code];
    if (this.call) {
      this.call(this.country);
    }
  }

  get() {
    return this.listenerCountry;

  }
}
