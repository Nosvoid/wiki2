import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CostumeSetsComponent } from './costume-sets.component';

describe('CostumeSetsComponent', () => {
  let component: CostumeSetsComponent;
  let fixture: ComponentFixture<CostumeSetsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CostumeSetsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CostumeSetsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
