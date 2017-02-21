import { Component } from '@angular/core';
import { Hero } from './hero';
import { HeroDetailComponent } from './hero-detail.component';
import { HeroService } from './hero.service';
import { OnInit } from '@angular/core';
import { Router} from '@angular/router';

@Component({
  //moduleId:module.id,
  selector: 'my-heroes',
  providers: [HeroService],
  templateUrl: 'app/heroes.component.html',
  styleUrls:['heroes.component.css'],
})

export class HeroesComponent implements OnInit { 
    title = "Tour of Heroes";

    ngOnInit(): void {
      this.getHeroes();
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

    getHeroes(): void {
      //this.heroes = this.heroService.getHeroes();
      this.heroService.getHeroes().then(heroes => this.heroes = heroes);
    }
}


