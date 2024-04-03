import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrarProveComponent } from './registrar-prove.component';

describe('RegistrarProveComponent', () => {
  let component: RegistrarProveComponent;
  let fixture: ComponentFixture<RegistrarProveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RegistrarProveComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RegistrarProveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
