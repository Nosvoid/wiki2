import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CookingSetComponent } from './cooking-set.component';

describe('CookingSetComponent', () => {
  let component: CookingSetComponent;
  let fixture: ComponentFixture<CookingSetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CookingSetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CookingSetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
