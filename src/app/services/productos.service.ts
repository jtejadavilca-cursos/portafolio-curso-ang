import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class ProductosService {
  productos:any[] = [];
  productosCargados:boolean = false;

  constructor(private http:Http) {
    this.cargarProductos();
  }

  public cargarProductos(){
    this.http.get('https://curso-html-angular4.firebaseio.com/productos_idx.json')
              .subscribe( res =>{
                this.productos = res.json();
                this.productosCargados = true;
                console.log(this.productos);
              });
  }

}
//https://curso-html-angular4.firebaseio.com/productos_idx.json
