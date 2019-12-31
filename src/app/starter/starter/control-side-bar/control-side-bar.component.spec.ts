import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ControlSideBarComponent } from './control-side-bar.component';

describe('ControlSideBarComponent', () => {
  let component: ControlSideBarComponent;
  let fixture: ComponentFixture<ControlSideBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ControlSideBarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ControlSideBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
