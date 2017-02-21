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
var Hero = (function () {
    function Hero() {
    }
    return Hero;
}());
exports.Hero = Hero;
var HEROES = [
    { id: 11, name: 'Arun kumar' },
    { id: 12, name: 'Ankit kumar' },
    { id: 13, name: 'Vismay' },
    { id: 14, name: 'Peeyush' },
    { id: 15, name: 'Umesh' },
];
var AppComponent = (function () {
    function AppComponent() {
        this.title = "Tour of Asset";
        this.heroes = HEROES;
        this.hero = {
            id: 1,
            name: 'Arun kumar'
        };
    }
    AppComponent.prototype.onSelect = function (hero1) {
        this.selectedHero = hero1;
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            styles: ["\n\t\t.selected {\n\t\t    background-color: #CFD8DC !important;\n\t\t    color: white;\n\t\t}\n\t  \t.heroes {\n\t\t    margin: 0 0 2em 0;\n\t\t    list-style-type: none;\n\t\t    padding: 0;\n\t\t    width: 15em;\n\t  \t}\n\t  \t.heroes li {\n\t    \tcursor: pointer;\n\t\t    position: relative;\n\t\t    left: 0;\n\t\t    background-color: #EEE;\n\t\t    margin: .5em;\n\t\t    padding: .3em 0;\n\t\t    height: 1.6em;\n\t\t    border-radius: 4px;\n\t  \t}\n\t  \t.heroes li.selected:hover {\n\t\t    background-color: #BBD8DC !important;\n\t\t    color: white;\n\t  \t}\n\t  \t.heroes li:hover {\n\t\t    color: #607D8B;\n\t\t    background-color: #DDD;\n\t\t    left: .1em;\n\t  \t}\n\t  \t.heroes .text {\n\t\t    position: relative;\n\t\t    top: -3px;\n\t  \t}\n\t  \t.heroes .badge {\n\t\t    display: inline-block;\n\t\t    font-size: small;\n\t\t    color: white;\n\t\t    padding: 0.8em 0.7em 0 0.7em;\n\t\t    background-color: #607D8B;\n\t\t    line-height: 1em;\n\t\t    position: relative;\n\t\t    left: -1px;\n\t\t    top: -4px;\n\t\t    height: 1.8em;\n\t\t    margin-right: .8em;\n\t\t    border-radius: 4px 0 0 4px;\n\t  \t}\n   "],
            template: "<h1> {{title}}</h1>\n\t<h2>{{hero.name}} details!</h2> \n\t<div><label>ID : </label>{{hero.id}}</div><br>\n\t<div><label>Name : </label>{{hero.name}}</div><br>\n\t<div>\n\t\t<label>Name : </label>\n\t\t<input [(ngModel)]=\"hero.name\" placeholder=\"Please enter value\">\n\t</div>\n\t<h2>Asset Team details!</h2>\n\t<ul class=\"heroes\">\n\t\t<li *ngFor=\"let hero of heroes\" (click)=\"onSelect(hero)\" [class.selected]=\"hero === selectedHero\">\n\t\t\t<span class=\"badge\">ID : {{hero.id}}</span>Name : {{hero.name}} <br>\n\t\t</li>\n\t</ul>\n\t<div *ngIf=\"selectedHero\">\n\t\t<div>\n\t\t\t<label>Selected Resource : </label>\n\t\t\t{{selectedHero.name}}\n\t\t\t<br>\n\t\t\t<input [(ngModel)]=\"selectedHero.name\" placeholder=\"Please enter value\">\n\t\t</div>\n\t</div>\n\t"
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.Component.js.map