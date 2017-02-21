import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { Router} from '@angular/router';

import { Hero } from './hero';
import { HeroDetailComponent } from './hero-detail.component';
import { HeroService } from './hero.service';


@Component({
  //moduleId:module.id,
  selector: 'my-employees',
  providers: [HeroService],
  templateUrl: 'app/employees.component.html',
  styleUrls:['heroes.component.css'],
})

export class EmployeesComponent implements OnInit { 
    title = "Tour of Employees";

    ngOnInit(): void {
      this.getEmployees();
    }


    heroes: Hero[];
    selectedHero: Hero;

    constructor(private heroService: HeroService,private router:Router){}

    onSelect(hero:Hero) : void {
      this.selectedHero = hero;
    }


    gotoDetails(): void{
      let link = ['/detail/',this.selectedHero.id];
      this.router.navigate(link);
    }
    
    getEmployees(): void {
      //this.heroes = this.heroService.getHeroes();
      //this.heroService.getEmployees().then(heroes => this.heroes = heroes);

      this.heroService.getEmployees()
       .subscribe(
          heroes => this.heroes = heroes
       );
    }
}