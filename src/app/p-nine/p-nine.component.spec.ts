import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PNineComponent } from './p-nine.component';

describe('PNineComponent', () => {
  let component: PNineComponent;
  let fixture: ComponentFixture<PNineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PNineComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PNineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
