import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class InfoWebService {

  info: any = {};
  colaboradores: any[] = [];
  cargando: boolean = true;
  infoColaboradoresCargada: boolean = false;

  constructor(public http: HttpClient) {
    this.cargarInfoWeb();
    this.cargarColaboradores();
  }

  public cargarInfoWeb() {
    this.cargando = true;
    this.http.get('assets/data/info.pagina.json')
              .subscribe( (data: any) => {
                this.cargando = false;
                this.info = data;
              } );
  }

  public cargarColaboradores() {

    this.http.get('https://curso-html-angular4.firebaseio.com/equipo.json')
              .subscribe( (data: any[]) => {
                this.infoColaboradoresCargada = true;
                this.colaboradores = data;
              } );

  }

}
