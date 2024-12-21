import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {HomeAppComponent} from "../components/home-app/home-app.component";
import {HeaderAppComponent} from "../components/header-app/header-app.component";
import {FloorApp} from "../components/FloorApp/FloorApp.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HomeAppComponent, HeaderAppComponent, FloorApp],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular-basic';
}
