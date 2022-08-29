import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorldBossesComponent } from './world-bosses.component';

describe('WorldBossesComponent', () => {
  let component: WorldBossesComponent;
  let fixture: ComponentFixture<WorldBossesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WorldBossesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WorldBossesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
