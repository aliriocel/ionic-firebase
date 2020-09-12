import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ClientesUpdatePageRoutingModule } from './clientes-update-routing.module';

import { ClientesUpdatePage } from './clientes-update.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ClientesUpdatePageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [ClientesUpdatePage]
})
export class ClientesUpdatePageModule {}
