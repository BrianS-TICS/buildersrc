import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListClientesComponent } from './list-clientes.component';

describe('ListClientesComponent', () => {
  let component: ListClientesComponent;
  let fixture: ComponentFixture<ListClientesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListClientesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListClientesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
