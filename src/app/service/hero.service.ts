import {Injectable} from '@angular/core';
import {HEROES} from './mock-heroes';
import { Hero } from '../hero';

import { Observable } from 'rxjs/Rx';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import * as Rx from "rxjs/Rx";

@Injectable()
export class HeroService {

//use promisess here to call asynchronous call,If the data is coming from the remote server
//so that over code will not get blocked. for the waiting of the respond from the server

 

  getHeroes() : Promise<Hero[]> {
    return Promise.resolve(HEROES);
  }
  
  getHero(id: number): Promise<Hero> {
  return this.getHeroes()
             .then(heroes => heroes.find(hero => hero.id === id));
}

}