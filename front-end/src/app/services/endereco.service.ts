import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EnderecoService {

  // Injeção de dependência nos parâmetros do construtor
  constructor(private http: HttpClient) { }

  listar() {
    return this.http.get('http://localhost:3000/endereco');
  }

  obterUm(id: String) {
    return this.http.get('http://localhost:3000/endereco/' + id);
  }

  novo(endereco) {
    return this.http.put('http://localhost:3000/endereco', endereco);
  }

  atualizar(endereco) {
    return this.http.patch('http://localhost:3000/endereco', endereco);
  }

  excluir(id: String) {
    return this.http.delete('http://localhost:3000/endereco/' + id);
  }

}
