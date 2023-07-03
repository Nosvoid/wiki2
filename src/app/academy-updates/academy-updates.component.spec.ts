import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcademyUpdatesComponent } from './academy-updates.component';

describe('AcademyUpdatesComponent', () => {
  let component: AcademyUpdatesComponent;
  let fixture: ComponentFixture<AcademyUpdatesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AcademyUpdatesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AcademyUpdatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
