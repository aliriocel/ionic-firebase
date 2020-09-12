import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ClientesDeletePageRoutingModule } from './clientes-delete-routing.module';

import { ClientesDeletePage } from './clientes-delete.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ClientesDeletePageRoutingModule
  ],
  declarations: [ClientesDeletePage]
})
export class ClientesDeletePageModule {}
