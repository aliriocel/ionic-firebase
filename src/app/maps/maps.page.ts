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


@Component({
  selector: 'app-maps',
  templateUrl: './maps.page.html',
  styleUrls: ['./maps.page.scss'],
})
export class MapsPage implements OnInit {

  map: GoogleMap;

  constructor(
    private plataform: Platform,

  ) { }

  async ngOnInit() {
    await this.plataform.ready();
    await this.loadMap();
  }

  loadMap() {

    let POINTS: BaseArrayClass<any> = new BaseArrayClass<any>([
      {
        position: { lat: -22.900106, lng: -43.558790 },
        title: "Senac Campo Grande",
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

  }

  onMarkerClick(params: any){

    let marker: Marker = <Marker>params[1];
    let iconData: any = marker.get('iconData');
    marker.setIcon(iconData);

  }
}
