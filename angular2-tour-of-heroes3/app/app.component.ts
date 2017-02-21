import { Component, OnInit } from '@angular/core';
//import { HeroDetailComponent } from './hero-detail.component';

@Component({
  selector: 'my-app',
  template: `<nav>
                <a routerLink="/heroes" routerLinkActive="Active"> Heroes </a>
                <a routerLink="/dashboard" routerLinkActive="Active"> Dash Board </a>
                <a routerLink="/employees" routerLinkActive="Active"> Employees </a>
              <nav>
                <router-outlet> </router-outlet>`,
  styleUrls:['app.component.css']
})

export class AppComponent implements OnInit {
	constructor(){}

	ngOnInit(){}

	title = "Tours of Heros";
}