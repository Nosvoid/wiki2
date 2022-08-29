import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RaidDamageComponent } from './raid-damage.component';

describe('RaidDamageComponent', () => {
  let component: RaidDamageComponent;
  let fixture: ComponentFixture<RaidDamageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RaidDamageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RaidDamageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
