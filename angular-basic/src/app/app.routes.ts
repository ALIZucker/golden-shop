import {Routes} from '@angular/router';
import {HomeAppComponent} from "../components/home-app/home-app.component";
import {AboutComponent} from "../pages/about/about.component";
import {DasteAppComponent} from "../pages/daste-app/daste-app.component";

export const routes: Routes = [{
  path: '', component: HomeAppComponent
}, {
  path: 'about', component: AboutComponent,
},{
  path: 'daste', component:DasteAppComponent
}];
