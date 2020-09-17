import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ClientesFotoPage } from './clientes-foto.page';

describe('ClientesFotoPage', () => {
  let component: ClientesFotoPage;
  let fixture: ComponentFixture<ClientesFotoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClientesFotoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ClientesFotoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
