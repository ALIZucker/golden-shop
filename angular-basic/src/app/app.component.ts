import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {HomeAppComponent} from "../components/home-app/home-app.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HomeAppComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular-basic';
}
