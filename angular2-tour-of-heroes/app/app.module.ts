import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { routing } from './app.routing';
import { InMemoryWebApiModule } from  'angular2-in-memory-web-api';
import { InMemoryDataService } from  './in-memory-data.service';

import { AppComponent }   from './app.component';
import { HeroDetailComponent } from './hero-detail.component';
import { HeroesComponent } from './heroes.component';
import { DashboardComponent } from './dashboard.component';
import { HeroService } from './hero.service';
import { EmployeesComponent } from './employees.component';




@NgModule({
  imports:      [ 	BrowserModule,
  					HttpModule,
  					FormsModule,
  					routing,
  					InMemoryWebApiModule.forRoot(InMemoryDataService)
  				],
  declarations: [ AppComponent,HeroDetailComponent,HeroesComponent,DashboardComponent,EmployeesComponent],
  bootstrap:    [ AppComponent ],
  providers:	[HeroService]
})
export class AppModule {}