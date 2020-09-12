import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TemplateService } from '../service/template.service';
import { ClienteService } from '../service/cliente.service';

@Component({
  selector: 'app-clientes-novo',
  templateUrl: './clientes-novo.page.html',
  styleUrls: ['./clientes-novo.page.scss'],
})
export class ClientesNovoPage implements OnInit {

  formGroup: FormGroup;
  
  constructor(
    private clienteServ: ClienteService,
    private formBuilder: FormBuilder,
    private template: TemplateService
  ) {
    this.iniciarForm();
  }

  ngOnInit() {
  }

  cadastrar() {

    this.template.loading.then(load => {
      load.present();
      this.clienteServ.cadastrar(this.formGroup.value).subscribe(
        data => {
          load.dismiss();
          this.template.myAlert('Cadastrado com sucesso');
          this.formGroup.reset();
        },
        err => {
          this.template.myAlert('Erro ao Cadastrar');
        }
      );
    })
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
}
