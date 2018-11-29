import { Component, OnInit } from '@angular/core';
import { PedidoService } from '../../services/pedido.service';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-pedido-list',
  templateUrl: './pedido-list.component.html',
  styleUrls: ['./pedido-list.component.css']
})
export class PedidoListComponent implements OnInit {

  public pedidos: any;

    // Injeção de dependência no parâmetro do construtor
  constructor(
    private pedidoSrv: PedidoService,
    private snackBar: MatSnackBar
  ) {}

  public colunasVisiveis: string[] = [
    'data',
    'cliente',
    'entrega',
    'viagem',
    'status',
    'observacao',
    'excluir'
  ];


  ngOnInit() {
    // Chamando o service
    this.pedidoSrv.listar().subscribe(
       dados => this.pedidos = dados, // Callback do bem
       erro => console.error(erro) // Callback do mal
    );
  }

    excluir(id: String) {
    if (confirm('Deseja realmente excluir este pedido?')) {
      this.pedidoSrv.excluir(id).subscribe(
        () => {
          this.snackBar.open('Pedido excluído com sucesso.', 'OK', {duration: 2000});
          this.ngOnInit(); // Recarrega a lista
        },
        erro => this.snackBar.open('ERRO AO EXLUIR ESTE PEDIDO: ' + erro.message, 'OK')
      );
    }
  }

}
