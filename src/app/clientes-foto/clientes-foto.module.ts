import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ClientesFotoPageRoutingModule } from './clientes-foto-routing.module';

import { ClientesFotoPage } from './clientes-foto.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ClientesFotoPageRoutingModule
  ],
  declarations: [ClientesFotoPage]
})
export class ClientesFotoPageModule {}
