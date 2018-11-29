import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class StatusService {

  // Injeção de dependência nos parâmetros do construtor
  constructor(private http: HttpClient) { }

  listar() {
    return this.http.get('http://localhost:3000/status');
  }

  obterUm(id: String) {
    return this.http.get('http://localhost:3000/status/' + id);
  }

  novo(status) {
    return this.http.put('http://localhost:3000/status', status);
  }

  atualizar(status) {
    return this.http.patch('http://localhost:3000/status', status);
  }

  excluir(id: String) {
    return this.http.delete('http://localhost:3000/status/' + id);
  }

}
