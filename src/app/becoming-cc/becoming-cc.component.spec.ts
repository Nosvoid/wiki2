import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BecomingCcComponent } from './becoming-cc.component';

describe('BecomingCcComponent', () => {
  let component: BecomingCcComponent;
  let fixture: ComponentFixture<BecomingCcComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BecomingCcComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BecomingCcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
