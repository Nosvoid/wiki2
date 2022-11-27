import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PEightOneComponent } from './p-eight-one.component';

describe('PEightOneComponent', () => {
  let component: PEightOneComponent;
  let fixture: ComponentFixture<PEightOneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PEightOneComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PEightOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
