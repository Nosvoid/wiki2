import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CostumeHatsComponent } from './costume-hats.component';

describe('CostumeHatsComponent', () => {
  let component: CostumeHatsComponent;
  let fixture: ComponentFixture<CostumeHatsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CostumeHatsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CostumeHatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
