import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SessionOneComponent } from './session-one.component';

describe('SessionOneComponent', () => {
  let component: SessionOneComponent;
  let fixture: ComponentFixture<SessionOneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SessionOneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SessionOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
