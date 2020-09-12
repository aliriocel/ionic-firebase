import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ClientesDetalhePage } from './clientes-detalhe.page';

const routes: Routes = [
  {
    path: '',
    component: ClientesDetalhePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ClientesDetalhePageRoutingModule {}
