import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PEightTwoComponent } from './p-eight-two.component';

describe('PEightTwoComponent', () => {
  let component: PEightTwoComponent;
  let fixture: ComponentFixture<PEightTwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PEightTwoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PEightTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
