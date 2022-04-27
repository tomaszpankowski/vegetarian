import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventS1Component } from './event-s1.component';

describe('EventS1Component', () => {
  let component: EventS1Component;
  let fixture: ComponentFixture<EventS1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EventS1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EventS1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
