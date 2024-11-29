import { Component, OnInit } from '@angular/core';

import { MenuItem } from 'primeng/api';
import { MenubarModule } from 'primeng/menubar';
import { MenuModule } from 'primeng/menu';

@Component({
  selector: 'app-headeritems-app',
  standalone: true,
  imports: [MenubarModule,MenuModule],

  templateUrl: './headeritems-app.component.html',
  styleUrl: './headeritems-app.component.css'
})
export class HeaderitemsAppComponent implements OnInit{
  items: MenuItem[] | undefined;

  ngOnInit() {
    this.items = [
      {
        label: 'Home',
        icon: 'pi pi-home'
      },
      {
        label: 'Features',
        icon: 'pi pi-star'
      },
      {
        label: 'Projects',
        icon: 'pi pi-search',

      },
      {
        label: 'Contact',
        icon: 'pi pi-envelope'
      }
    ]
  }
}
