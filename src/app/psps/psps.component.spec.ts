import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PspsComponent } from './psps.component';

describe('PspsComponent', () => {
  let component: PspsComponent;
  let fixture: ComponentFixture<PspsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PspsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PspsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
