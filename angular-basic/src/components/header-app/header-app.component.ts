import { Component } from '@angular/core';
import {HeaderitemsAppComponent} from "../headeritems-app/headeritems-app.component";

@Component({
  selector: 'app-header-app',
  standalone: true,
  imports: [
    HeaderitemsAppComponent
  ],
  templateUrl: './header-app.component.html',
  styleUrl: './header-app.component.css'
})
export class HeaderAppComponent {

}
