import { Component, OnInit, Inject } from '@angular/core';

import { Leader } from '../shared/leader';
import { LeaderService } from '../services/leader.service';
import { flyInOut } from '../animations/app.animation';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
  host: {
    '[@flyInOut]': 'true',
    'style': 'display: block;'
    },
    animations: [
      flyInOut()
    ]
})
export class AboutComponent implements OnInit {

  leaders: Leader[];
  leadersErrMsg: string;

  constructor(private leader_service:LeaderService,
              @Inject('BaseURL') private BaseURL) { }

  ngOnInit() {
    this.leader_service.getLeaders().subscribe(leaders => this.leaders = leaders,
                                                 err => this.leadersErrMsg = err );
  }

}
