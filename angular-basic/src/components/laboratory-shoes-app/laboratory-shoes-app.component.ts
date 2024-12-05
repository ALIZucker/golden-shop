import { Component } from '@angular/core';
import {AddClickStyleDirective} from "../../directive/add-click-style.directive";
import {CoSizeClickStyleDirective} from "../../directive/co-size-click-style.directive";

@Component({
  selector: 'app-laboratory-shoes-app',
  standalone: true,
  imports: [
    AddClickStyleDirective,
    CoSizeClickStyleDirective
  ],
  templateUrl: './laboratory-shoes-app.component.html',
  styleUrl: './laboratory-shoes-app.component.css'
})
export class LaboratoryShoesAppComponent {
  imageFile: string[]=[ "assets/icon/Frame.png","assets/icon/layer1.png","assets/icon/New_Balance_logo.png","assets/icon/Adidas_Logo%201.png","assets/icon/Frame%201010107987.png"]
  sizeList:number[]=[38,39,40,42,43,44]
}
