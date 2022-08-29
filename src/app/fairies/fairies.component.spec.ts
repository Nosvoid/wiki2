import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FairiesComponent } from './fairies.component';

describe('FairiesComponent', () => {
  let component: FairiesComponent;
  let fixture: ComponentFixture<FairiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FairiesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FairiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
