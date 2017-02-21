import {Injectable} from '@angular/core';
import { Hero } from './hero';
import { HEROES } from './mock-heroes';
//import { Observable }   from 'rxjs/Observable';
//import { Http, Response } from '@angular/http';

@Injectable()

export class HeroService {

	/*private heroesUrl = '/angular/getemployees';  // URL to web API
	constructor (private http: Http) {

	}*/

	/*getHeroes (): Observable<Hero[]> {
    	return this.http.get(this.heroesUrl)
                    .map(this.extractData)
                    .catch(this.handleError);
  	}*/

	getHeroes(): Promise<Hero[]>{
		return Promise.resolve(HEROES);
	}

	getHero(id: number): Promise<Hero>{
		return Promise.resolve(this.getHeroes().then(heroes => heroes.find(hero => hero.id == id)));
	}
}