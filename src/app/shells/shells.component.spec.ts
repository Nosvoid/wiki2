import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShellsComponent } from './shells.component';

describe('ShellsComponent', () => {
  let component: ShellsComponent;
  let fixture: ComponentFixture<ShellsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShellsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShellsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
