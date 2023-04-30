import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BettingSetComponent } from './betting-set.component';

describe('BettingSetComponent', () => {
  let component: BettingSetComponent;
  let fixture: ComponentFixture<BettingSetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BettingSetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BettingSetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
