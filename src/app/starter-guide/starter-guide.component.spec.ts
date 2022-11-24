import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StarterGuideComponent } from './starter-guide.component';

describe('StarterGuideComponent', () => {
  let component: StarterGuideComponent;
  let fixture: ComponentFixture<StarterGuideComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StarterGuideComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StarterGuideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
