import {platformBrowserDynamic} from "@angular/platform-browser-dynamic";  //This is for the bootstraping the content
import {AppModule} from './app.module';

const platform = platformBrowserDynamic();
platform.bootstrapModule(AppModule);