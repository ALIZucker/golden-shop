import { Component } from '@angular/core';
import {HeaderAppComponent} from "../header-app/header-app.component";
import {CategoryAppComponent} from "../category-app/category-app.component";
import {BannerPartComponent} from "../banner-part/banner-part.component";


@Component({
  selector: 'app-home-app',
  standalone: true,
  imports: [
    HeaderAppComponent,
    CategoryAppComponent,
    BannerPartComponent,

  ],
  templateUrl: './home-app.component.html',
  styleUrl: './home-app.component.css'
})
export class HomeAppComponent {

}
