import {Component, OnInit, ViewEncapsulation} from '@angular/core';

import { MenuItem } from 'primeng/api';
import { MenubarModule } from 'primeng/menubar';
import { MenuModule } from 'primeng/menu';
import {NgStyle} from "@angular/common";
import {Button} from "primeng/button";
import {Router} from "@angular/router";

@Component({
  selector: 'app-headeritems-app',
  standalone: true,
  imports: [MenubarModule, MenuModule, NgStyle, Button],
  encapsulation: ViewEncapsulation.None,
  templateUrl: './headeritems-app.component.html',
  styleUrl: './headeritems-app.component.css'
})
export class HeaderitemsAppComponent implements OnInit{
  items: MenuItem[] | undefined;
  backgroundColor: string = 'blue';
  textColor: string = 'white';
  constructor(private router:Router) {
  }

  ngOnInit() {
    this.items = [
      {
        label: 'دسته بندی',
        icon: 'pi pi-home',
        command: () => {
          this.router.navigate(['/']);
        }
      },
      {
        label: 'پرفروش ترین ها',
        icon: 'pi pi-star',
        command: () => {
          this.router.navigate(['/about']);
        }
      },
      {
        label: 'پیشنهاد ها و تخفبف ها',
        icon: 'pi pi-search',
        command: () => {
          this.router.navigate(['/daste']);
        }

      },
      {
        label: 'شگفت انگیزها',
        icon: 'pi pi-envelope'
      },
      {
        label: 'آبا سوالی دارد؟',
        icon: 'pi pi-envelope'
      },
      {
        label: 'آزمایشگاه کفش',
        icon: 'pi pi-envelope'
      }
    ]
  }
}
