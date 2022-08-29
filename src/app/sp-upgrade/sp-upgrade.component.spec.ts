import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpUpgradeComponent } from './sp-upgrade.component';

describe('SpUpgradeComponent', () => {
  let component: SpUpgradeComponent;
  let fixture: ComponentFixture<SpUpgradeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpUpgradeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SpUpgradeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
