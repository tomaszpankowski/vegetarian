import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GalleryS2Component } from './gallery-s2.component';

describe('GalleryS2Component', () => {
  let component: GalleryS2Component;
  let fixture: ComponentFixture<GalleryS2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GalleryS2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GalleryS2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
