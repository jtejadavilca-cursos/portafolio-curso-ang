import { Component} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductosService } from '../../services/productos.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html'
})
export class SearchComponent {

  termino: string = undefined;
  productosFiltrados: any[] = [];

  constructor(private route: ActivatedRoute,
    public _productosService: ProductosService) {

      route.params.subscribe(parametros => {
        this.termino = parametros['termino'];
        _productosService.buscarProductos(this.termino);
      });
  }
}
