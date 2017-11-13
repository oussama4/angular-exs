import { Injectable } from '@angular/core';
import { RestangularModule, Restangular } from 'ngx-restangular';

import { FeedBack } from '../shared/feedback';

@Injectable()
export class FeedbackService {

  constructor(private restangular: Restangular) { }

  submitFeedback(feedback: FeedBack) {
    let fb = this.restangular.all('feedback');
    fb.post(feedback);
  }

}
