import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PerfectionSetComponent } from './perfection-set.component';

describe('PerfectionSetComponent', () => {
  let component: PerfectionSetComponent;
  let fixture: ComponentFixture<PerfectionSetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PerfectionSetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PerfectionSetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
