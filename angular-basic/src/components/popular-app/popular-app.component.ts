import {Component} from '@angular/core';
import {NgTemplateOutlet} from "@angular/common";

@Component({
  selector: 'app-popular-app',
  standalone: true,
  imports: [
    NgTemplateOutlet
  ],
  templateUrl: './popular-app.component.html',
  styleUrl: './popular-app.component.css'
})
export class PopularAppComponent {
  templateContextone =
    [
      {message: {ImageAdd: "assets/icon/Frame.png"}},
      {message: {ImageAdd: "assets/icon/layer1.png"}},
      {message: {ImageAdd: "assets/icon/New_Balance_logo.png"}},
      {message: {ImageAdd: "assets/icon/Adidas_Logo%201.png"}},
      {message: {ImageAdd: "assets/icon/Frame%201010107987.png"}},
      {message: {ImageAdd: "assets/icon/Frame%201010108074.png"}},
      {message: {ImageAdd: "assets/icon/Under_armour_logo%20(1).png"}},
      {message: {ImageAdd: "assets/icon/layer1.png"}},
    ];


}
