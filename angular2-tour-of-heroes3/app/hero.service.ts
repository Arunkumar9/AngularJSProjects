import {Injectable} from '@angular/core';
import { Hero } from './hero';
import { Headers,Http,Response } from '@angular/http';
import 'rxjs/add/operator/toPromise';
//import { Observable }   from 'rxjs/Observable';
import 'rxjs/Rx';

//import { HEROES } from './mock-heroes';
//import { Observable }   from 'rxjs/Observable';

@Injectable()

export class HeroService {

	private employeesUrl = 'arun/getemployees';  // URL to web API
	
  	private heroesUrl = 'app/heroes';

  	constructor(private http: Http){
  		this.http = http;
  	}

	getHeroes(): Promise<Hero[]>{
		//return Promise.resolve(HEROES);
		return this.http.get(this.heroesUrl).toPromise().then(response => response.json().data as Hero[]).catch(this.handleError);
	}

	getEmployees(){
		//return this.http.get(this.employeesUrl).map(response => response.json());
		debugger;
		return this.http.get(this.employeesUrl).map(res => res.json());
	}

	getHero(id: number): Promise<Hero>{
		return Promise.resolve(this.getHeroes().then(heroes => heroes.find(hero => hero.id == id)));
	}

	private handleError(error:any): Promise<any>{
		console.log('Any Error Occured',error); //for demo purpose only
		return Promise.reject(error.message || error);
	}
}