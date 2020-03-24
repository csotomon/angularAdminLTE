import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Version1Component } from './version1.component';

describe('Version1Component', () => {
  let component: Version1Component;
  let fixture: ComponentFixture<Version1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Version1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Version1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
