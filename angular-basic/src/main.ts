import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { register as registerSwiperElements } from 'swiper/element/bundle';
import {provideRouter} from "@angular/router";
import {routes} from "./app/app.routes";



registerSwiperElements()
bootstrapApplication(AppComponent, {
  providers:[provideRouter(routes)]
})
  .catch((err) => console.error(err));
