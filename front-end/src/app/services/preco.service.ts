import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PrecoService {

  // Injeção de dependência nos parâmetros do construtor
  constructor(private http: HttpClient) { }

  listar() {
    return this.http.get('http://localhost:3000/preco');
  }

  obterUm(id: String) {
    return this.http.get('http://localhost:3000/preco/' + id);
  }

  novo(preco) {
    return this.http.put('http://localhost:3000/preco', preco);
  }

  atualizar(preco) {
    return this.http.patch('http://localhost:3000/preco', preco);
  }

  excluir(id: String) {
    return this.http.delete('http://localhost:3000/preco/' + id);
  }

}
