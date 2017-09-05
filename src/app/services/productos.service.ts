import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class ProductosService {
  productos:any[] = [];
  cargando:boolean = true;

  constructor(private http:Http) {
    this.cargarProductos();
  }

  public cargarProductos(){
    this.cargando = true;

    this.http.get('https://curso-html-angular4.firebaseio.com/productos_idx.json')
              .subscribe( res =>{
                console.log(this.productos);

                // setTimeout(()=>{
                  this.productos = res.json();
                  this.cargando = false;
                // }, 1);

              });
  }

}
//https://curso-html-angular4.firebaseio.com/productos_idx.json
