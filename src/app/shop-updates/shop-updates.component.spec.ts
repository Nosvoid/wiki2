import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopUpdatesComponent } from './shop-updates.component';

describe('ShopUpdatesComponent', () => {
  let component: ShopUpdatesComponent;
  let fixture: ComponentFixture<ShopUpdatesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShopUpdatesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShopUpdatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
