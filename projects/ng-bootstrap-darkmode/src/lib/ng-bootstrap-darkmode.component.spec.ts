import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgBootstrapDarkmodeComponent } from './ng-bootstrap-darkmode.component';

describe('NgBootstrapDarkmodeComponent', () => {
  let component: NgBootstrapDarkmodeComponent;
  let fixture: ComponentFixture<NgBootstrapDarkmodeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgBootstrapDarkmodeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgBootstrapDarkmodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
