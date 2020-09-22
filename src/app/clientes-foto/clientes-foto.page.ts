import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';
import { Cliente } from '../model/cliente';
import { ClienteService } from '../service/cliente.service';


@Component({
  selector: 'app-clientes-foto',
  templateUrl: './clientes-foto.page.html',
  styleUrls: ['./clientes-foto.page.scss'],
})
export class ClientesFotoPage implements OnInit {

  cliente: Cliente = new Cliente();
  foto: any = null;
  fotoBlob: any = null;

  constructor(private clienteServ: ClienteService,
    private route: ActivatedRoute,
    private navCtrl: NavController,
  ) { }

  ngOnInit() {

    this.route.paramMap.subscribe(url => {

      let id = url.get('id');

      this.cliente.id = id;

    })
  }

  tirarFoto() {
    this.clienteServ.obterFotoCamera.subscribe(data => {
      this.foto = data;
    })
  }

  obterFoto() {
    this.clienteServ.obterFotoArquivo.subscribe(data => {
      this.foto = data;
    })
  }

  enviarFoto() {
    this.clienteServ.uploadFoto(this.cliente.id).subscribe(data => {
      console.log("Enviado");
      this.navCtrl.navigateBack(['clientes-detalhe', this.cliente.id])
    }, err => {
      console.log(err);
    })

    /*
        this.fireStorage.storage.ref().child(`/perfil/${this.cliente.id}.jpg`).put(this.fotoBlob).then(data=>{
    
        });*/


  }






}

