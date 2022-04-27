import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GalleryS3Component } from './gallery-s3.component';

describe('GalleryS3Component', () => {
  let component: GalleryS3Component;
  let fixture: ComponentFixture<GalleryS3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GalleryS3Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GalleryS3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
