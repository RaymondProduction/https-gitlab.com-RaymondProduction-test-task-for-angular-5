import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { TeamService } from './services/team.service';
import { CountryService } from './services/country.service';

import { AppComponent } from './app.component';
import { TeamComponent } from './components/team/team.component';
import { CountryComponent } from './components/country/country.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    TeamComponent,
    CountryComponent
  ],
  imports: [
    BrowserModule, FormsModule
  ],
  providers: [TeamService, CountryService],
  bootstrap: [AppComponent]
})
export class AppModule { }
