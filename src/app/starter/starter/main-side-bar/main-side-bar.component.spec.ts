import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainSideBarComponent } from './main-side-bar.component';

describe('MainSideBarComponent', () => {
  let component: MainSideBarComponent;
  let fixture: ComponentFixture<MainSideBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainSideBarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainSideBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
