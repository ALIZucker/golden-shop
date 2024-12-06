import {Component, OnInit} from '@angular/core';
import {HeaderAppComponent} from "../header-app/header-app.component";
import {CategoryAppComponent} from "../category-app/category-app.component";
import {BannerPartComponent} from "../banner-part/banner-part.component";
import {ProSellerAppComponent} from "../pro-seller-app/pro-seller-app.component";
import {BannerImageAppComponent} from "../banner-image-app/banner-image-app.component";
import {PopularAppComponent} from "../popular-app/popular-app.component";
import {LaboratoryShoesAppComponent} from "../laboratory-shoes-app/laboratory-shoes-app.component";
import {PreferShoesComponent} from "../prefer-shoes/prefer-shoes.component";
import {PictureAppComponent} from "../picture-app/picture-app.component";


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
    LaboratoryShoesAppComponent,
    PreferShoesComponent,
    PictureAppComponent,

  ],
  templateUrl: './home-app.component.html',
  styleUrl: './home-app.component.css'
})
export class HomeAppComponent implements OnInit {

  products!: Array<any>
  productsjadid!: Array<any>

  ngOnInit(): void {
    this.products = [{
      image: "assets/img/Frame%201010108039.png",
      title: "کفش نایک مدل Phantom Luna",
      price: "۱,۸۰۰,۰۰۰ تومان",
      Offprice: "۳,۸۰۰,۰۰۰ تومان",
      off: "5%"
    }, {
      image:"assets/img/Frame%201010108039%20(1).png",
      title: "کفش نایک مدل Phantom Luna",
      price: "۱,۸۰۰,۰۰۰ تومان",
      Offprice: "۳,۸۰۰,۰۰۰ تومان",
      off: "5%"
    }, {
      image: "assets/img/Frame%201010108039%20(1).png",
      title: "کفش نایک مدل Phantom Luna",
      price: "۱,۸۰۰,۰۰۰ تومان",
      Offprice: "۳,۸۰۰,۰۰۰ تومان",
      off: "5%"
    }, {
      image: "assets/img/Frame%201010108039.png",
      title: "کفش نایک مدل Phantom Luna",
      price: "۱,۸۰۰,۰۰۰ تومان",
      Offprice: "۳,۸۰۰,۰۰۰ تومان",
      off: "5%"
    }, {
      image: "assets/img/Frame%201010108039%20(1).png",
      title: "کفش نایک مدل Phantom Luna",
      price: "۱,۸۰۰,۰۰۰ تومان",
      Offprice: "۳,۸۰۰,۰۰۰ تومان",
      off: "5%"
    },]
    this.productsjadid = [{
      image: "assets/img/Frame%201010108040%20(1).png",
      title: "کفش نایک مدل Phantom Luna",
      price: "۱,۸۰۰,۰۰۰ تومان",
      Offprice: "۳,۸۰۰,۰۰۰ تومان",
      off: "5%"
    }, {
      image: "assets/img/Frame%201010108041.png",
      title: "کفش نایک مدل Phantom Luna",
      price: "۱,۸۰۰,۰۰۰ تومان",
      Offprice: "۳,۸۰۰,۰۰۰ تومان",
      off: "5%"
    }, {
      image: "assets/img/Frame%201010108039.png",
      title: "کفش نایک مدل Phantom Luna",
      price: "۱,۸۰۰,۰۰۰ تومان",
      Offprice: "۳,۸۰۰,۰۰۰ تومان",
      off: "5%"
    }, {
      image: "assets/img/Frame%201010108039%20(2).png",
      title: "کفش نایک مدل Phantom Luna",
      price: "۱,۸۰۰,۰۰۰ تومان",
      Offprice: "۳,۸۰۰,۰۰۰ تومان",
      off: "5%"
    }, {
      image: "assets/img/Frame%201010108039.png",
      title: "کفش نایک مدل Phantom Luna",
      price: "۱,۸۰۰,۰۰۰ تومان",
      Offprice: "۳,۸۰۰,۰۰۰ تومان",
      off: "5%"
    },]
  }

}
