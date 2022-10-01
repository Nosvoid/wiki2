import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RainbowBattleComponent } from './rainbow-battle.component';

describe('RainbowBattleComponent', () => {
  let component: RainbowBattleComponent;
  let fixture: ComponentFixture<RainbowBattleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RainbowBattleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RainbowBattleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
