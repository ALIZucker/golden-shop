import {Component} from '@angular/core';
import {NgTemplateOutlet} from "@angular/common";

@Component({
  selector: 'app-pro-seller-app',
  standalone: true,
  imports: [
    NgTemplateOutlet
  ],
  templateUrl: './pro-seller-app.component.html',
  styleUrl: './pro-seller-app.component.css'
})
export class ProSellerAppComponent {
  templateContextone = {
    message: {
      ImageAdd1: "assets/img/Frame%201010108040.png",
      ImageAdd2: "assets/img/Rectangle.png",
      ImageAdd3: "assets/img/Frame%201010108039%20(2).png",
      ImageAdd4: "assets/img/Frame%201010108040%20(1).png"
    }
  };
  templateContextTwo = {
    message: {
      ImageAdd1: "assets/img/Frame%201010108041%20(1).png",
      ImageAdd2: "assets/img/Frame%201010108041.png",
      ImageAdd3: "assets/img/Frame%201010108040%20(1).png",
      ImageAdd4: "assets/img/Frame%201010108039.png"
    }
  };
  templateContextthree = {
    message: {
      ImageAdd1: "assets/img/Frame%201010108039%20(1).png",
      ImageAdd2: "assets/img/Frame%201010108041.png",
      ImageAdd3: "assets/img/Frame%201010108040%20(1).png",
      ImageAdd4: "assets/img/Frame%201010108039.png"
    }
  };

}
