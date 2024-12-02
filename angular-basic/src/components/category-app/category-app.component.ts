import { Component } from '@angular/core';
import {NgTemplateOutlet} from "@angular/common";

@Component({
  selector: 'app-category-app',
  standalone: true,
  imports: [
    NgTemplateOutlet
  ],
  templateUrl: './category-app.component.html',
  styleUrl: './category-app.component.css'
})
export class CategoryAppComponent {
  templateContextone = { message: {title:"کفش پیاده‌روی",ImageAdd:"assets/img/Frame%201010107993.png"} };
  templateContextTwo = { message: {title:"کفش بسکتبال",ImageAdd:"assets/img/Frame%201010107991.png"} };
  templateContextThree = { message: {title:"کفش فوتبال",ImageAdd:"assets/img/Frame%201010107992.png"} };
}
