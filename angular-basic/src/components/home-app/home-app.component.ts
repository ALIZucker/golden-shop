import { Component } from '@angular/core';
import {HeaderAppComponent} from "../header-app/header-app.component";
import {CategoryAppComponent} from "../category-app/category-app.component";
import {BannerPartComponent} from "../banner-part/banner-part.component";
import {ProSellerAppComponent} from "../pro-seller-app/pro-seller-app.component";
import {BannerImageAppComponent} from "../banner-image-app/banner-image-app.component";
import {PopularAppComponent} from "../popular-app/popular-app.component";


@Component({
  selector: 'app-home-app',
  standalone: true,
  imports: [
    HeaderAppComponent,
    CategoryAppComponent,
    BannerPartComponent,
    ProSellerAppComponent,
    BannerImageAppComponent,
    PopularAppComponent,

  ],
  templateUrl: './home-app.component.html',
  styleUrl: './home-app.component.css'
})
export class HomeAppComponent {

}
