import { Component } from '@angular/core';
import {HeaderAppComponent} from "../header-app/header-app.component";

@Component({
  selector: 'app-home-app',
  standalone: true,
  imports: [
    HeaderAppComponent
  ],
  templateUrl: './home-app.component.html',
  styleUrl: './home-app.component.css'
})
export class HomeAppComponent {

}
