import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Version2Component } from './version2.component';

describe('Version2Component', () => {
  let component: Version2Component;
  let fixture: ComponentFixture<Version2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Version2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Version2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
