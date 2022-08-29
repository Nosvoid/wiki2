import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HelmetsMasksComponent } from './helmets-masks.component';

describe('HelmetsMasksComponent', () => {
  let component: HelmetsMasksComponent;
  let fixture: ComponentFixture<HelmetsMasksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HelmetsMasksComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HelmetsMasksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
