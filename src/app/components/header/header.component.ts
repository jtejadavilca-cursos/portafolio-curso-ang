import { Component } from '@angular/core';
import { InfoWebService } from '../../services/info-web.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent {
  constructor( public _infoWebService:InfoWebService,
               private router:Router){

  }

  buscarProducto(termino:string){
    this.router.navigate(['buscar', termino]);
  }
}
