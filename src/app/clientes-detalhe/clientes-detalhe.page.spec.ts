import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ClientesDetalhePage } from './clientes-detalhe.page';

describe('ClientesDetalhePage', () => {
  let component: ClientesDetalhePage;
  let fixture: ComponentFixture<ClientesDetalhePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClientesDetalhePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ClientesDetalhePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
