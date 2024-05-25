import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PSixComponent } from './p-six.component';

describe('PNineComponent', () => {
  let component: PSixComponent;
  let fixture: ComponentFixture<PSixComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PSixComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PSixComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
