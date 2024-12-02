import { Component, CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import {ImageModule} from "primeng/image";


@Component({
  selector: 'app-banner-part',
  standalone: true,
  imports: [
    ImageModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './banner-part.component.html',
  styleUrl: './banner-part.component.css'
})
export class BannerPartComponent {

}
