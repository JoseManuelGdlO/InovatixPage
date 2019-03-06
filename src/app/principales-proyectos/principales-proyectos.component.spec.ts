import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrincipalesProyectosComponent } from './principales-proyectos.component';

describe('PrincipalesProyectosComponent', () => {
  let component: PrincipalesProyectosComponent;
  let fixture: ComponentFixture<PrincipalesProyectosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrincipalesProyectosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrincipalesProyectosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
