import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SoulSystemComponent } from './soul-system.component';

describe('SoulSystemComponent', () => {
  let component: SoulSystemComponent;
  let fixture: ComponentFixture<SoulSystemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SoulSystemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SoulSystemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
