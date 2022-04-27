import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogS1Component } from './blog-s1.component';

describe('BlogS1Component', () => {
  let component: BlogS1Component;
  let fixture: ComponentFixture<BlogS1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BlogS1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BlogS1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
