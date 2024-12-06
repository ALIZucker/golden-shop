import {Component, OnInit, Input} from '@angular/core';

import {CarouselModule} from 'primeng/carousel';
import {Button, ButtonModule} from 'primeng/button';
import {TagModule} from 'primeng/tag';

@Component({
  selector: 'app-prefer-shoes',
  standalone: true,
  imports: [
    CarouselModule,
    TagModule,
    Button
  ],
  templateUrl: './prefer-shoes.component.html',
  styleUrl: './prefer-shoes.component.css'
})
export class PreferShoesComponent implements OnInit {
  responsiveOptions!: any[];

  @Input({required: true}) titleName!: string
  @Input({required: true}) products!:Array<any>


  ngOnInit(): void {



    this.responsiveOptions = [
      {
        breakpoint: '1199px',
        numVisible: 1,
        numScroll: 1
      },
      {
        breakpoint: '991px',
        numVisible: 2,
        numScroll: 1
      },
      {
        breakpoint: '767px',
        numVisible: 1,
        numScroll: 1
      }
    ];
  }


}
