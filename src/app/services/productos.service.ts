import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class ProductosService {
  producto:any;
  productos:any[] = [];
  productosFiltrados:any[] = [];
  cargando:boolean = true;
  cargandoItem:boolean = true;

  constructor(private http:Http) {
    this.cargarProductos();
  }

  public buscarProductos(termino:string){
    if(this.productos.length === 0){
      this.cargarProductos().then( ()=>{
        this.filtrarProductos(termino);
      });
    }else{
      this.filtrarProductos(termino);
    }
  }

  private filtrarProductos(termino:string){

    if(termino.trim().length === 0){
      this.productosFiltrados = this.productos;
    }else{
      termino = termino.toLowerCase();
      this.productosFiltrados = [];
      this.productos.forEach(prod =>{
        if(prod.categoria.indexOf(termino) >= 0 || prod.titulo.toLowerCase().indexOf(termino) >= 0){
          this.productosFiltrados.push(prod);
        }
      });
    }
  }

  public cargarItem(codItem:string){
    this.cargandoItem = true;
    return this.http.get(`https://curso-html-angular4.firebaseio.com/productos/${codItem}.json`);
  }

  public cargarProductos(){
    this.cargando = true;

    let promesa =  new Promise( (resolve, reject) =>{
        this.http.get('https://curso-html-angular4.firebaseio.com/productos_idx.json')
            .subscribe( res =>{
                this.productos = res.json();
                this.cargando = false;
                resolve();
            });
    });
    return promesa;
  }
}
