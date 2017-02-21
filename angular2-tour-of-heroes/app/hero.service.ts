import {Injectable} from '@angular/core';
import { Hero } from './hero';
import { Headers,Http,Response } from '@angular/http';
import 'rxjs/add/operator/toPromise';
//import { Observable }   from 'rxjs/Observable';
import 'rxjs/Rx';
//import {Jsonp, URLSearchParams} from '@angular/http'; 

//import { HEROES } from './mock-heroes';
//import { Observable }   from 'rxjs/Observable';

@Injectable()

export class HeroService {

	private employeesUrl = 'http://localhost/AngularJSProjects/AngularPHP/AngularMySqlConnection.php';  // URL to web API
	
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
		//debugger;
		return this.http.get(this.employeesUrl).map(res => res.json());
	}

	getHero(id: number): Promise<Hero>{
		return Promise.resolve(this.getHeroes().then(heroes => heroes.find(hero => hero.id == id)));
	}

	private handleError(error:any): Promise<any>{
		console.log('Any Error Occured',error); //for demo purpose only
		return Promise.reject(error.message || error);
	}


	private headers = new Headers({'Content-Type':'applictation/json'});
	updateHero(hero: Hero): Promise<Hero>{
		const url= `${this.heroesUrl}/${hero.id}`;

		return this.http.put(url,JSON.stringify(hero), {headers: this.headers})
		.toPromise()
		.then(() => hero)
		.catch(this.handleError);
	}

	createHero(id:number,name:string): Promise<Hero>{

		return this.http.post(this.heroesUrl,JSON.stringify({id:id,name:name}),{headers:this.headers})
		.toPromise()
		.then(res => res.json().data)
		.catch(this.handleError);
	}

	deleteHeroes(id:number): Promise<Hero>{
		const url= `${this.heroesUrl}/${id}`;

		return this.http.delete(url, {headers: this.headers})
		.toPromise()
		.then(() => null)
		.catch(this.handleError);
	}
}