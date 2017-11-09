import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/delay';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

import { ProcessHttpmsgService } from './process-httpmsg.service';
import { Dish } from '../shared/dish';
import { DISHES } from '../shared/dishes';
import { baseURL } from '../shared/baseurl';

@Injectable()
export class DishService {

  constructor(private http: Http,
              private processHttpMsg: ProcessHttpmsgService) { }

  getDishes(): Observable<Dish[]> {
    return this.http.get(baseURL + 'dishes')
      // tslint:disable-next-line:arrow-return-shorthand
      .map(res => { return this.processHttpMsg.extractData(res); });
  }

  getDish(id: number): Observable<Dish> {
    return this.http.get(baseURL + 'dishes/' + id)
    // tslint:disable-next-line:arrow-return-shorthand
      .map(res => { return this.processHttpMsg.extractData(res); });
  }

  getFeaturedDish(): Observable<Dish> {
    return this.http.get(baseURL + 'dishes?featured=true')
    // tslint:disable-next-line:arrow-return-shorthand
      .map(res => { return this.processHttpMsg.extractData(res)[0]; });
  }

  getDishIds(): Observable<number[]> {
    return this.getDishes()
      .map(dishes => { return dishes.map(dish => dish.id); });
  }
}
