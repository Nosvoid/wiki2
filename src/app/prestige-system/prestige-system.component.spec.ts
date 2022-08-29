import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrestigeSystemComponent } from './prestige-system.component';

describe('PrestigeSystemComponent', () => {
  let component: PrestigeSystemComponent;
  let fixture: ComponentFixture<PrestigeSystemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrestigeSystemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PrestigeSystemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
