import { ComponentFixture, TestBed } from '@angular/core/testing';

import { XmasEventComponent } from './xmas-event.component';

describe('WorldBossesComponent', () => {
  let component: XmasEventComponent;
  let fixture: ComponentFixture<XmasEventComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ XmasEventComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(XmasEventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
