import { Component, OnInit } from '@angular/core';

import { Leader } from '../shared/leader';
import { LeaderService } from '../services/leader.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  leaders: Leader[];

  constructor(private leader_service:LeaderService) { }

  ngOnInit() {
    this.leader_service.getLeaders().subscribe(leaders => this.leaders = leaders);
  }

}
