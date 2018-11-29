import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  // Injeção de dependência nos parâmetros do construtor
  constructor(private http: HttpClient) { }

  listar() {
    return this.http.get('http://localhost:3000/cliente');
  }

  obterUm(id: String) {
    return this.http.get('http://localhost:3000/cliente/' + id);
  }

  novo(cliente) {
    return this.http.put('http://localhost:3000/cliente', cliente);
  }

  atualizar(cliente) {
    return this.http.patch('http://localhost:3000/cliente', cliente);
  }

  excluir(id: String) {
    return this.http.delete('http://localhost:3000/cliente/' + id);
  }

}
