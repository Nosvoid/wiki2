import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FishSetComponent } from './fish-set.component';

describe('GoldComponent', () => {
  let component: FishSetComponent;
  let fixture: ComponentFixture<FishSetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FishSetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FishSetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
