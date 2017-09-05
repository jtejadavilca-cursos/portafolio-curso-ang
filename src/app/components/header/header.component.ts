import { Component } from '@angular/core';
import { InfoWebService } from '../../services/info-web.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent {
  constructor( public _infoWebService:InfoWebService ){

  }
}
