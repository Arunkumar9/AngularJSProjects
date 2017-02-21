"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var http_1 = require('@angular/http');
require('rxjs/add/operator/toPromise');
//import { Observable }   from 'rxjs/Observable';
require('rxjs/Rx');
//import { HEROES } from './mock-heroes';
//import { Observable }   from 'rxjs/Observable';
var HeroService = (function () {
    function HeroService(http) {
        this.http = http;
        this.employeesUrl = 'arun/getemployees'; // URL to web API
        this.heroesUrl = 'app/heroes';
        this.http = http;
    }
    HeroService.prototype.getHeroes = function () {
        //return Promise.resolve(HEROES);
        return this.http.get(this.heroesUrl).toPromise().then(function (response) { return response.json().data; }).catch(this.handleError);
    };
    HeroService.prototype.getEmployees = function () {
        //return this.http.get(this.employeesUrl).map(response => response.json());
        debugger;
        return this.http.get(this.employeesUrl).map(function (res) { return res.json(); });
    };
    HeroService.prototype.getHero = function (id) {
        return Promise.resolve(this.getHeroes().then(function (heroes) { return heroes.find(function (hero) { return hero.id == id; }); }));
    };
    HeroService.prototype.handleError = function (error) {
        console.log('Any Error Occured', error); //for demo purpose only
        return Promise.reject(error.message || error);
    };
    HeroService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], HeroService);
    return HeroService;
}());
exports.HeroService = HeroService;
//# sourceMappingURL=hero.service.js.map