import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GalleryRoutingModule } from './gallery-routing.module';
import { GalleryComponent } from './gallery/gallery.component';
import { GalleryS1Component } from './gallery-s1/gallery-s1.component';
import { GalleryS2Component } from './gallery-s2/gallery-s2.component';
import { GalleryS3Component } from './gallery-s3/gallery-s3.component';


@NgModule({
  declarations: [
    GalleryComponent,
    GalleryS1Component,
    GalleryS2Component,
    GalleryS3Component
  ],
  imports: [
    CommonModule,
    GalleryRoutingModule
  ]
})
export class GalleryModule { }
