import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistroMarcaComponent } from './registro-marca.component';

describe('RegistroMarcaComponent', () => {
  let component: RegistroMarcaComponent;
  let fixture: ComponentFixture<RegistroMarcaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegistroMarcaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistroMarcaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
