import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoubleBoxComponent } from './double-box.component';

describe('DoubleBoxComponent', () => {
  let component: DoubleBoxComponent;
  let fixture: ComponentFixture<DoubleBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DoubleBoxComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DoubleBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
