import {Component} from '@angular/core';

export class Hero {	
	id: number;
	name : string;
}

const HEROES : Hero[] = [
	{id : 11 , name : 'Arun kumar'},
	{id : 12 , name : 'Ankit kumar'},
	{id : 13 , name : 'Vismay'},
	{id : 14 , name : 'Peeyush'},
	{id : 15 , name : 'Umesh'},
]


@Component({
	selector : 'my-app',
	styles :[`
		.selected {
		    background-color: #CFD8DC !important;
		    color: white;
		}
	  	.heroes {
		    margin: 0 0 2em 0;
		    list-style-type: none;
		    padding: 0;
		    width: 15em;
	  	}
	  	.heroes li {
	    	cursor: pointer;
		    position: relative;
		    left: 0;
		    background-color: #EEE;
		    margin: .5em;
		    padding: .3em 0;
		    height: 1.6em;
		    border-radius: 4px;
	  	}
	  	.heroes li.selected:hover {
		    background-color: #BBD8DC !important;
		    color: white;
	  	}
	  	.heroes li:hover {
		    color: #607D8B;
		    background-color: #DDD;
		    left: .1em;
	  	}
	  	.heroes .text {
		    position: relative;
		    top: -3px;
	  	}
	  	.heroes .badge {
		    display: inline-block;
		    font-size: small;
		    color: white;
		    padding: 0.8em 0.7em 0 0.7em;
		    background-color: #607D8B;
		    line-height: 1em;
		    position: relative;
		    left: -1px;
		    top: -4px;
		    height: 1.8em;
		    margin-right: .8em;
		    border-radius: 4px 0 0 4px;
	  	}
   `],
	template : `<h1> {{title}}</h1>
	<h2>{{hero.name}} details!</h2> 
	<div><label>ID : </label>{{hero.id}}</div><br>
	<div><label>Name : </label>{{hero.name}}</div><br>
	<div>
		<label>Name : </label>
		<input [(ngModel)]="hero.name" placeholder="Please enter value">
	</div>
	<h2>Asset Team details!</h2>
	<ul class="heroes">
		<li *ngFor="let hero of heroes" (click)="onSelect(hero)" [class.selected]="hero === selectedHero">
			<span class="badge">ID : {{hero.id}}</span>Name : {{hero.name}} <br>
		</li>
	</ul>
	<div *ngIf="selectedHero">
		<div>
			<label>Selected Resource : </label>
			{{selectedHero.name}}
			<br>
			<input [(ngModel)]="selectedHero.name" placeholder="Please enter value">
		</div>
	</div>
	`
})

export class AppComponent {
	title = "Tour of Asset";

	heroes = HEROES;

	hero : Hero = {
		id : 1,
		name : 'Arun kumar'
	};

	selectedHero: Hero;

	onSelect(hero1:Hero) : void {
		this.selectedHero = hero1;
	}
}