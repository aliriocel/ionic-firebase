import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ClientesUpdatePage } from './clientes-update.page';

describe('ClientesUpdatePage', () => {
  let component: ClientesUpdatePage;
  let fixture: ComponentFixture<ClientesUpdatePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClientesUpdatePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ClientesUpdatePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
