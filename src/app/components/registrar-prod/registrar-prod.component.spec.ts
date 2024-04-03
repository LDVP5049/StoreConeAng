import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrarProdComponent } from './registrar-prod.component';

describe('RegistrarProdComponent', () => {
  let component: RegistrarProdComponent;
  let fixture: ComponentFixture<RegistrarProdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RegistrarProdComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RegistrarProdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
