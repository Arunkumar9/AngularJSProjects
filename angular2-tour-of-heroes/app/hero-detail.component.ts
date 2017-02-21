import { Component,Input,OnInit } from '@angular/core';
import { Hero } from './hero';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';

import { HeroService } from './hero.service';

@Component({
	selector: 'my-hero-details',
  providers: [HeroService],
	templateUrl: 'app/herodetails.component.html',
  styleUrls:['hero-detail.component.css']
})

export class HeroDetailComponent implements OnInit {

  constructor(
    private heroService: HeroService,
    private route: ActivatedRoute,
    private location: Location
  ){ }   

  ngOnInit(){
      this.route.params.forEach((params:Params) => {
         let id = +params['id'];
         this.heroService.getHero(id).then(hero=> this.hero=hero);
      })
  }

	@Input()

	hero:Hero;
  
  goBack(): void{
    this.location.back();
  }

  save(): void{
    this.heroService.updateHero(this.hero).then(() => this.goBack());
  }
}