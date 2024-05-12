import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MiniPetsComponent } from './mini-pets.component';

describe('MiniPetsComponent', () => {
  let component: MiniPetsComponent;
  let fixture: ComponentFixture<MiniPetsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MiniPetsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MiniPetsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
