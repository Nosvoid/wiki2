import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CostumeWingsComponent } from './costume-wings.component';

describe('CostumeWingsComponent', () => {
  let component: CostumeWingsComponent;
  let fixture: ComponentFixture<CostumeWingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CostumeWingsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CostumeWingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
