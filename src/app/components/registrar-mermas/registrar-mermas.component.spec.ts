import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrarMermasComponent } from './registrar-mermas.component';

describe('RegistrarMermasComponent', () => {
  let component: RegistrarMermasComponent;
  let fixture: ComponentFixture<RegistrarMermasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RegistrarMermasComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RegistrarMermasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
