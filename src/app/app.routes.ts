import { RouterModule, Routes } from '@angular/router';

import {
  AboutComponent,
  HomeComponent,
  PortafolioItemComponent
} from "./components/index.paginas";

const APP_ROUTES: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'portafolio-item', component: PortafolioItemComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'home' }
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES, {useHash:true});
