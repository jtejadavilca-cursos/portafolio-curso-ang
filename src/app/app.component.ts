import { Component } from '@angular/core';
import { InfoWebService } from './services/info-web.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  constructor(private _infoWebService:InfoWebService){

  }
}
