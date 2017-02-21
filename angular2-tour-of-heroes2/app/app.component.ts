import { Component, OnInit } from '@angular/core';
//import { HeroDetailComponent } from './hero-detail.component';

@Component({
  selector: 'my-app',
  template: `
  		<nav>
	  		<a routerLink="/heroes"> Heroes </a>
	  		<a routerLink="/dashboard"> Dash Board </a>
  		<nav>
  		<router-outlet> </router-outlet>
            `
 /* template: `
  			<my-heroes> </my-heroes>
            `*/
})

export class AppComponent implements OnInit {
	constructor(){}

	ngOnInit(){}

	title = "Tours of Heros";
}