import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeccionTecnologiasComponent } from './seccion-tecnologias.component';

describe('SeccionTecnologiasComponent', () => {
  let component: SeccionTecnologiasComponent;
  let fixture: ComponentFixture<SeccionTecnologiasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SeccionTecnologiasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SeccionTecnologiasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
