import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ObtainingSpsComponent } from './obtaining-sps.component';

describe('ObtainingSpsComponent', () => {
  let component: ObtainingSpsComponent;
  let fixture: ComponentFixture<ObtainingSpsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ObtainingSpsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ObtainingSpsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
