import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MapsGeolocationPageRoutingModule } from './maps-geolocation-routing.module';

import { MapsGeolocationPage } from './maps-geolocation.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MapsGeolocationPageRoutingModule
  ],
  declarations: [MapsGeolocationPage]
})
export class MapsGeolocationPageModule {}
