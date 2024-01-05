// daily-hub.component.spec.ts

import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DailyHubComponent } from './daily-hub.component';

describe('DailyHubComponent', () => {
  let component: DailyHubComponent;
  let fixture: ComponentFixture<DailyHubComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DailyHubComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DailyHubComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
