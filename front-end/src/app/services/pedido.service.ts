import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PedidoService {

  // Injeção de dependência nos parâmetros do construtor
  constructor(private http: HttpClient) { }

  listar() {
    return this.http.get('http://localhost:3000/pedido');
  }

  obterUm(id: String) {
    return this.http.get('http://localhost:3000/pedido/' + id);
  }

  novo(pedido) {
    return this.http.put('http://localhost:3000/pedido', pedido);
  }

  atualizar(pedido) {
    return this.http.patch('http://localhost:3000/pedido', pedido);
  }

  excluir(id: String) {
    return this.http.delete('http://localhost:3000/pedido/' + id);
  }

}
