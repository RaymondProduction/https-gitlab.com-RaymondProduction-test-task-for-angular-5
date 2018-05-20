import { Injectable } from '@angular/core';
import { Meta } from '@angular/platform-browser';

import { ITeam } from '../interfaces/iteam';

@Injectable()
export class TeamService {

  teams: [ITeam];

  constructor(public meta: Meta) {
    this.teams = JSON.parse(this.meta.getTag('name=footballClubs').content);
  }

}
