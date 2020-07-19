import { Component } from '@angular/core';
import {InfoWebService} from '../../services/info-web.service';
@Component({
  selector: 'app-about',
  templateUrl: './about.component.html'
})
export class AboutComponent {
  constructor(public _infoWebService: InfoWebService) {

  }
}
