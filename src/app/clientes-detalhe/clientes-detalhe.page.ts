import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ClienteService } from '../service/cliente.service';
import { Cliente } from '../model/cliente';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-clientes-detalhe',
  templateUrl: './clientes-detalhe.page.html',
  styleUrls: ['./clientes-detalhe.page.scss'],
})
export class ClientesDetalhePage implements OnInit {

  cliente : Cliente = new Cliente();
  constructor(
    private route : ActivatedRoute,
    private clientServ: ClienteService,
    private navCtrl : NavController
  ) { }

  ngOnInit() {
    this.route.paramMap.subscribe(url=>{
      let id = url.get('id');
      this.clientServ.buscaPorId(id).subscribe(data=>{
        this.cliente = data.payload.data();
        this.cliente.id = data.payload.id as string;
        console.log(this.cliente);
      })
    })
  }

  atualizar(clienteObj){
    this.navCtrl.navigateForward(['clientes-update',clienteObj.id]);
  }

  excluir(clienteObj){
    this.navCtrl.navigateForward(['clientes-delete',clienteObj.id]);
  }

}
