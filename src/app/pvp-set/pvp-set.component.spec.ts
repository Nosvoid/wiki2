import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PvpSetComponent } from './pvp-set.component';

describe('PvpSetComponent', () => {
  let component: PvpSetComponent;
  let fixture: ComponentFixture<PvpSetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PvpSetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PvpSetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
