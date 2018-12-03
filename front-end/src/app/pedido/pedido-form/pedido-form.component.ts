import { Component, OnInit } from '@angular/core';
import { PedidoService } from '../../services/pedido.service';
import { ClienteService } from '../../services/cliente.service';
import { EnderecoService } from '../../services/endereco.service';
import { StatusService } from '../../services/status.service';
import { PedidoItemService } from '../../services/pedidoitem.service';
import { ItemService } from '../../services/item.service';
import { ValorService } from '../../services/valor.service';
import { Router, ActivatedRoute } from '@angular/router';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-pedido-form',
  templateUrl: './pedido-form.component.html',
  styleUrls: ['./pedido-form.component.css']
})
export class PedidoFormComponent implements OnInit {

  constructor(
    private pedidoSrv: PedidoService,
    private clienteSrv: ClienteService,
    private enderecoSrv: EnderecoService,
    private statusSrv: StatusService,
    private pedidoitemSrv: PedidoItemService,
    private itemSrv: ItemService,
    private valorSrv: ValorService,
    private router: Router,
    private actRoute: ActivatedRoute,
    private snackBar: MatSnackBar
  ) { }

  public pedido: any = {}; // Objeto vazio
  public clientes: any = []; // Vetor vazio
  public enderecos: any = [];
  public status: any = [];
  public pedidoitem: any = [];
  public itens: any = [];
  public valores: any = [];

  ngOnInit() {

    // Acessando os parâmetros da url
    this.actRoute.params.subscribe(
      params => {
        if(params.id) { // Se existir um parâmetro chamado id
          // Aciona o serviço para buscar dados no back-end
          this.pedidoSrv.obterUm(params.id).subscribe(
            dados => {
              this.pedido = dados;
              console.log(this.pedido);
            }, // Callback se OK
            erro => console.error(erro) // Callback se erro
          )
        }
      }
    );

    this.clienteSrv.listar().subscribe(
      dados => {
        this.clientes = dados;
        console.log(this.clientes);
      },
      erro => console.error(erro)
    );

    this.enderecoSrv.listar().subscribe(
      dados => {
        this.enderecos = dados;
        console.log(this.enderecos);
      },
      erro => console.error(erro)
    );

    this.statusSrv.listar().subscribe(
      dados => {
        this.status = dados;
        console.log(this.status);
      },
      erro => console.error(erro)
    );

    this.pedidoitemSrv.listar().subscribe(
      dados => {
        this.pedidoitem = dados;
        console.log(this.pedidoitem);
      },
      erro => console.error(erro)
    );

    this.itemSrv.listar().subscribe(
      dados => {
        this.itens = dados;
        console.log(this.itens);
      },
      erro => console.error(erro)
    );

    this.valorSrv.listar().subscribe(
      dados => {
        this.valores = dados;
        console.log(this.valores);
      },
      erro => console.error(erro)
    );

  }

  salvar() {
    let retorno: any;
    if (this.pedido._id) {
      retorno = this.pedidoSrv.atualizar(this.pedido);
    } else {
      retorno = this.pedidoSrv.novo(this.pedido);
    }
    retorno.subscribe(
      () => {
        this.snackBar.open('Pedido salvo com sucesso', 'OK', { duration: 2000 });
        this.router.navigate(['pedido']); // Volta à listagem
      },
      erro => {
        this.snackBar.open('Erro ao salvar o pedido: ' + erro.message, 'OK');
        console.error(erro);
      }
    );
  }

  cancelar() {
    if (confirm('Deseja realmente cancelar as alterações?')) {
      this.router.navigate(['pedido']);
    }
  }


}