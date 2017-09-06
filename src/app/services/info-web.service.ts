import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class InfoWebService {

  info:any = {};
  colaboradores:any[] = [];
  cargando:boolean = true;
  infoColaboradoresCargada:boolean = false;

  constructor(public http:Http) {
    this.cargarInfoWeb();
    this.cargarColaboradores();
  }

  public cargarInfoWeb(){
    this.cargando = true;
    this.http.get("assets/data/info.pagina.json")
              .subscribe( data => {
                this.cargando = false;
                this.info = data.json();
              } );
  }

  public cargarColaboradores(){

    this.http.get("https://curso-html-angular4.firebaseio.com/equipo.json")
              .subscribe( data => {
                this.infoColaboradoresCargada = true;
                this.colaboradores = data.json();
              } );

  }

}
