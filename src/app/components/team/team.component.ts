import { Component, OnInit } from '@angular/core';
import { NgForm} from '@angular/forms';


import { ITeam } from '../../interfaces/iteam';
import { TeamService } from '../../services/team.service';
import { CountryService } from '../../services/country.service';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css']
})
export class TeamComponent implements OnInit {

  teams:  ITeam[];
  team: ITeam;
  select = 0;
  inUefaLeague: string;

  constructor(private teamService: TeamService, private countryService: CountryService) {
    this.teams = this.teamService.teams;
    this.show();
  }

  show() {
    this.team = this.teams[this.select];
    this.inUefaLeague = this.team.inUefaLeague ? 'Yes' : 'No';
    this.countryService.setCode(this.team.countyCode);
  }

  ngOnInit() {
    console.log(' Teams = >', this.teamService.teams);
  }
}
