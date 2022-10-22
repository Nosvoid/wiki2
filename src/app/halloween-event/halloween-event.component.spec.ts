import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HalloweenEventComponent } from './halloween-event.component';

describe('HalloweenEventComponent', () => {
  let component: HalloweenEventComponent;
  let fixture: ComponentFixture<HalloweenEventComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HalloweenEventComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HalloweenEventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
