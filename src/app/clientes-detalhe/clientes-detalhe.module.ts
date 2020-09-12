import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ClientesDetalhePageRoutingModule } from './clientes-detalhe-routing.module';

import { ClientesDetalhePage } from './clientes-detalhe.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ClientesDetalhePageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [ClientesDetalhePage]
})
export class ClientesDetalhePageModule {}
