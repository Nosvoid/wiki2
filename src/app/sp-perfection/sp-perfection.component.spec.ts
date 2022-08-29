import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpPerfectionComponent } from './sp-perfection.component';

describe('SpPerfectionComponent', () => {
  let component: SpPerfectionComponent;
  let fixture: ComponentFixture<SpPerfectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpPerfectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SpPerfectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
