import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CookingSpComponent } from './cooking-sp.component';

describe('CookingSpComponent', () => {
  let component: CookingSpComponent;
  let fixture: ComponentFixture<CookingSpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CookingSpComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CookingSpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
