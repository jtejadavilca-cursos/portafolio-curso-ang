import { Component } from '@angular/core';
import { InfoWebService } from '../../services/info-web.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html'
})
export class FooterComponent{
  anio:number = new Date().getFullYear();

  constructor(public _infoWebService:InfoWebService){

  }

}
