import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TattooCarveComponent } from './tattoo-carve.component';

describe('TattooCarveComponent', () => {
  let component: TattooCarveComponent;
  let fixture: ComponentFixture<TattooCarveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TattooCarveComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TattooCarveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
