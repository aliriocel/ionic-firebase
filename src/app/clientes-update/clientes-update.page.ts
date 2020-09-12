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
    this.route.paramMap.subscribe(url => {
      let id = url.get('id');
      this.clientServ.buscaPorId(id).subscribe(data => {
        this.cliente = data.payload.data();
        this.cliente.id = data.payload.id as string;
        this.iniciarForm();
      })
    })
  }

  iniciarForm() {
    this.formGroup = this.formBuilder.group({
      nome: [this.cliente.nome, [Validators.required, Validators.minLength(5)]],
      cpf: [this.cliente.cpf, [Validators.required, Validators.minLength(5)]],
      telefone: [this.cliente.telefone, [Validators.required, Validators.minLength(5)]],
      email: [this.cliente.email, [Validators.required, Validators.minLength(5)]],
      endereco: [this.cliente.endereco, [Validators.required, Validators.minLength(5)]]
    })
  }

  atualizar() {

    this.clientServ.atualizar(this.cliente.id, this.formGroup.value).subscribe(data => {
      console.log(data);
      this.template.myAlert('Atualizado com sucesso');
    })
  }

}
