import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProdListComponent } from './prod-list.component';

describe('ProdListComponent', () => {
  let component: ProdListComponent;
  let fixture: ComponentFixture<ProdListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProdListComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProdListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
