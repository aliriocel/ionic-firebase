import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MapsGeolocationPage } from './maps-geolocation.page';

describe('MapsGeolocationPage', () => {
  let component: MapsGeolocationPage;
  let fixture: ComponentFixture<MapsGeolocationPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MapsGeolocationPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MapsGeolocationPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
