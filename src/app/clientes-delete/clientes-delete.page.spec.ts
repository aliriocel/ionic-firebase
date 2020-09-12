import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ClientesDeletePage } from './clientes-delete.page';

describe('ClientesDeletePage', () => {
  let component: ClientesDeletePage;
  let fixture: ComponentFixture<ClientesDeletePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClientesDeletePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ClientesDeletePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
