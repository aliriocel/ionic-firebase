import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ClientesUpdatePage } from './clientes-update.page';

const routes: Routes = [
  {
    path: '',
    component: ClientesUpdatePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ClientesUpdatePageRoutingModule {}
