import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ClientesFotoPage } from './clientes-foto.page';

const routes: Routes = [
  {
    path: '',
    component: ClientesFotoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ClientesFotoPageRoutingModule {}
