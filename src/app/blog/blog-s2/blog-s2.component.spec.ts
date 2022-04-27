import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogS2Component } from './blog-s2.component';

describe('BlogS2Component', () => {
  let component: BlogS2Component;
  let fixture: ComponentFixture<BlogS2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BlogS2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BlogS2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
