import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FishSystemComponent } from './fish-system.component';

describe('FishSystemComponent', () => {
  let component: FishSystemComponent;
  let fixture: ComponentFixture<FishSystemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FishSystemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FishSystemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
