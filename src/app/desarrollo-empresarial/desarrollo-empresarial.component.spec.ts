import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DesarrolloEmpresarialComponent } from './desarrollo-empresarial.component';

describe('DesarrolloEmpresarialComponent', () => {
  let component: DesarrolloEmpresarialComponent;
  let fixture: ComponentFixture<DesarrolloEmpresarialComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DesarrolloEmpresarialComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DesarrolloEmpresarialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
