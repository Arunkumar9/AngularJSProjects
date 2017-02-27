import { NgModule } from '@angular/core';
import {BrowserModule} from "@angular/platform-browser"; //This will enable to use the browser
import {AppComponent} from './app.component';

@NgModule({
    imports   : [BrowserModule],
    declarations: [AppComponent],
    bootstrap : [AppComponent]
})

export class AppModule{

}