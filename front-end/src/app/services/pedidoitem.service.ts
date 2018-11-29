import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PedidoItemService {

  // Injeção de dependência nos parâmetros do construtor
  constructor(private http: HttpClient) { }

  listar() {
    return this.http.get('http://localhost:3000/pedidoitem');
  }

  obterUm(id: String) {
    return this.http.get('http://localhost:3000/pedidoitem/' + id);
  }

  novo(pedidoitem) {
    return this.http.put('http://localhost:3000/pedidoitem', pedidoitem);
  }

  atualizar(pedidoitem) {
    return this.http.patch('http://localhost:3000/pedidoitem', pedidoitem);
  }

  excluir(id: String) {
    return this.http.delete('http://localhost:3000/pedidoitem/' + id);
  }

}
