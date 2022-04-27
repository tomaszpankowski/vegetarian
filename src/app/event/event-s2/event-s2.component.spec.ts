import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventS2Component } from './event-s2.component';

describe('EventS2Component', () => {
  let component: EventS2Component;
  let fixture: ComponentFixture<EventS2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EventS2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EventS2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
