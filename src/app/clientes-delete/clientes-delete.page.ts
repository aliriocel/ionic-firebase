import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { ActivatedRoute } from '@angular/router';
import { AlertController, NavController } from '@ionic/angular';
import { Cliente } from '../model/cliente';
import { ClienteService } from '../service/cliente.service';


@Component({
  selector: 'app-clientes-delete',
  templateUrl: './clientes-delete.page.html',
  styleUrls: ['./clientes-delete.page.scss'],
})
export class ClientesDeletePage implements OnInit {

  cliente: Cliente = new Cliente();

  constructor(
    private router: ActivatedRoute,
    private clientServ: ClienteService,
    private navCtrl: NavController,
    public alertCtrl: AlertController,
    private firestore: AngularFirestore
  ) { }

  ngOnInit(): void {

    this.router.paramMap.subscribe(resp => {
      let id = resp.get('id');
      this.firestore.collection('cliente').doc(id).snapshotChanges().subscribe(data => {
        this.cliente = data.payload.data() as Cliente;
        this.cliente.id = data.payload.id;
      })
    })
  }


  //MÉTODO NORMAL

  // excluir() {
  //  this.firestore.collection('cliente').doc(this.cliente.id).delete().then(() => {
  // this.navCtrl.navigateRoot(['/clientes']);
  // })
  //}


    //TENTAVIDA DE MÉTODO DESACOPLADO (NÃO FUNCIONA)

  excluir(id : string) {
    this.clientServ.excluir2(id);
      this.navCtrl.navigateRoot('clientes');
    
  }




}
