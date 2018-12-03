import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ValorService {

  // Injeção de dependência nos parâmetros do construtor
  constructor(private http: HttpClient) { }

  listar() {
    return this.http.get('http://localhost:3000/valor');
  }

  obterUm(id: String) {
    return this.http.get('http://localhost:3000/valor/' + id);
  }

  novo(valor) {
    return this.http.put('http://localhost:3000/valor', valor);
  }

  atualizar(valor) {
    return this.http.patch('http://localhost:3000/valor', valor);
  }

  excluir(id: String) {
    return this.http.delete('http://localhost:3000/valor/' + id);
  }

}
