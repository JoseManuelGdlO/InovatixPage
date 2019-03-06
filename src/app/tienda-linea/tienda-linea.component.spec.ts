import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TiendaLineaComponent } from './tienda-linea.component';

describe('TiendaLineaComponent', () => {
  let component: TiendaLineaComponent;
  let fixture: ComponentFixture<TiendaLineaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TiendaLineaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TiendaLineaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
