import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MermasListComponent } from './mermas-list.component';

describe('MermasListComponent', () => {
  let component: MermasListComponent;
  let fixture: ComponentFixture<MermasListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MermasListComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MermasListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
