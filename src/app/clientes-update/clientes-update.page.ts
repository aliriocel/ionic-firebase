import { Component, OnInit } from '@angular/core';
import { Cliente } from '../model/cliente';
import { Validators, FormGroup, FormBuilder } from '@angular/forms';
import { ClienteService } from '../service/cliente.service';
import { TemplateService } from '../service/template.service';
import { ActivatedRoute } from '@angular/router';
import { AngularFirestore } from '@angular/fire/firestore';


@Component({
  selector: 'app-clientes-update',
  templateUrl: './clientes-update.page.html',
  styleUrls: ['./clientes-update.page.scss'],
})
export class ClientesUpdatePage implements OnInit {

  formGroup: FormGroup;
  cliente: Cliente = new Cliente();

  constructor(private formBuilder: FormBuilder,
    private clientServ: ClienteService,
    private template: TemplateService,
    private route: ActivatedRoute,
    private firestore: AngularFirestore) {
    this.iniciarForm();
  }

  ngOnInit() {
  }

  iniciarForm() {
    this.formGroup = this.formBuilder.group({
      nome: ['', [Validators.required, Validators.minLength(5)]],
      cpf: ['', [Validators.required, Validators.minLength(5)]],
      telefone: ['', [Validators.required, Validators.minLength(5)]],
      email: ['', [Validators.required, Validators.minLength(5)]],
      endereco: ['', [Validators.required, Validators.minLength(5)]]
    })
  }

  atualizar() {
    this.route.paramMap.subscribe(resp => {
      let id = resp.get('id');
      this.firestore.collection('cliente').doc(id).set(this.formGroup.value).then(() => {
        this.template.myAlert('Atualizado com sucesso');
      }).catch(() => {
        this.template.myAlert('Erro ao Atualizar');
      })
    })
  }


  //Tentativa de fazer o método Desacoplado
  //atualizar(cliente, id){
  //this.clientServ.atualizar(cliente,id);
  //}

}
