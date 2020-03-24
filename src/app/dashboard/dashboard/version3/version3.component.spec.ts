import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Version3Component } from './version3.component';

describe('Version3Component', () => {
  let component: Version3Component;
  let fixture: ComponentFixture<Version3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Version3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Version3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
