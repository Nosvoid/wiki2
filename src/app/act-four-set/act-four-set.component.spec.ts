import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActFourSetComponent } from './act-four-set.component';

describe('ActFourSetComponent', () => {
  let component: ActFourSetComponent;
  let fixture: ComponentFixture<ActFourSetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActFourSetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ActFourSetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
