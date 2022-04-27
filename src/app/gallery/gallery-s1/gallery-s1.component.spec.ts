import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GalleryS1Component } from './gallery-s1.component';

describe('GalleryS1Component', () => {
  let component: GalleryS1Component;
  let fixture: ComponentFixture<GalleryS1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GalleryS1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GalleryS1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
