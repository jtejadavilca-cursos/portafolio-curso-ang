import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class InfoWebService {

  info:any = {};
  estaCargada:boolean = false;

  constructor(public http:Http) {
    this.http.get("assets/data/info.pagina.json")
              .subscribe( data => {
                console.log(data.json());
                this.estaCargada = true;
                this.info = data.json();
              } );
  }

}
