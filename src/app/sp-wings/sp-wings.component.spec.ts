import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpWingsComponent } from './sp-wings.component';

describe('SpWingsComponent', () => {
  let component: SpWingsComponent;
  let fixture: ComponentFixture<SpWingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpWingsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SpWingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
