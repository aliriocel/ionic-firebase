import { Component, OnInit } from '@angular/core';
import {
  GoogleMaps,
  GoogleMap,
  GoogleMapsEvent,
  GoogleMapOptions,
  CameraPosition,
  MarkerOptions,
  Marker,
  Environment, BaseArrayClass, ILatLng
} from '@ionic-native/google-maps';
import { Platform } from '@ionic/angular';
import { Geolocation } from '@ionic-native/geolocation/ngx';


@Component({
  selector: 'app-maps-geolocation',
  templateUrl: './maps-geolocation.page.html',
  styleUrls: ['./maps-geolocation.page.scss'],
})
export class MapsGeolocationPage implements OnInit {

  map: GoogleMap;

  constructor(
    private plataform: Platform,
    private geolocation : Geolocation
  ) { }

  async ngOnInit() {
    await this.plataform.ready();
    await this.loadMap();
  }

  loadMap() {

    this.geolocation.getCurrentPosition().then((resp)=>{

    

    let POINTS: BaseArrayClass<any> = new BaseArrayClass<any>([
      {
        position: { lat: resp.coords.latitude , lng: resp.coords.longitude },
        title: "Meu Local",
        iconData: "blue"
      }

    ])

    let bounds: ILatLng[] = POINTS.map((data: any, idx: number)=>{
      return data.position;
    });

    this.map = GoogleMaps.create('map_canvas',{
      camera : {
        target: bounds
      }
    });

    POINTS.forEach((data:any)=>{

      let marker: Marker = this.map.addMarkerSync(data);
      marker.on(GoogleMapsEvent.MARKER_CLICK).subscribe(this.onMarkerClick);
    });

  })
}

  onMarkerClick(params: any){

    let marker: Marker = <Marker>params[1];
    let iconData: any = marker.get('iconData');
    marker.setIcon(iconData);

  }

}
