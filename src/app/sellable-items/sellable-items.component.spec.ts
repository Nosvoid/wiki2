import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SellableItemsComponent } from './sellable-items.component';

describe('SellableItemsComponent', () => {
  let component: SellableItemsComponent;
  let fixture: ComponentFixture<SellableItemsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SellableItemsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SellableItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
