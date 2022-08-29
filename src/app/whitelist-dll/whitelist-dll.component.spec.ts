import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhitelistDllComponent } from './whitelist-dll.component';

describe('WhitelistDllComponent', () => {
  let component: WhitelistDllComponent;
  let fixture: ComponentFixture<WhitelistDllComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WhitelistDllComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WhitelistDllComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
