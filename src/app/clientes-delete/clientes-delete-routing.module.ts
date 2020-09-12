import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ClientesDeletePage } from './clientes-delete.page';

const routes: Routes = [
  {
    path: '',
    component: ClientesDeletePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ClientesDeletePageRoutingModule {}
