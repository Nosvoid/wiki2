import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Act4Component } from './act4.component';

describe('Act4Component', () => {
  let component: Act4Component;
  let fixture: ComponentFixture<Act4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Act4Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Act4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
