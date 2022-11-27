import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PEightComponent } from './p-eight.component';

describe('PEightComponent', () => {
  let component: PEightComponent;
  let fixture: ComponentFixture<PEightComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PEightComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PEightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
