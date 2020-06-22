import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SessionThreeComponent } from './session-three.component';

describe('SessionThreeComponent', () => {
  let component: SessionThreeComponent;
  let fixture: ComponentFixture<SessionThreeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SessionThreeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SessionThreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
