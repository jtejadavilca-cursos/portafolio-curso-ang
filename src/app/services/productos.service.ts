import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class ProductosService {
  producto:any;
  productos:any[] = [];
  cargando:boolean = true;
  cargandoItem:boolean = true;

  constructor(private http:Http) {
    this.cargarProductos();
  }

  public cargarItem(codItem:string){
    this.cargandoItem = true;
    return this.http.get(`https://curso-html-angular4.firebaseio.com/productos/${codItem}.json`);
              // .subscribe( res =>{
              //     this.producto = res.json();
              //     this.cargandoItem = false;
              //   });
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
