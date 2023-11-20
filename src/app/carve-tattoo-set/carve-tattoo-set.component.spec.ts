import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarveTattooSetComponent } from './carve-tattoo-set.component';

describe('DoubleBoxComponent', () => {
  let component: CarveTattooSetComponent;
  let fixture: ComponentFixture<CarveTattooSetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarveTattooSetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CarveTattooSetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
