import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MapsGeolocationPage } from './maps-geolocation.page';

const routes: Routes = [
  {
    path: '',
    component: MapsGeolocationPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MapsGeolocationPageRoutingModule {}
