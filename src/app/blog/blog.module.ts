import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BlogRoutingModule } from './blog-routing.module';
import { BlogComponent } from './blog/blog.component';
import { BlogS1Component } from './blog-s1/blog-s1.component';
import { BlogS2Component } from './blog-s2/blog-s2.component';


@NgModule({
  declarations: [
    BlogComponent,
    BlogS1Component,
    BlogS2Component
  ],
  imports: [
    CommonModule,
    BlogRoutingModule
  ]
})
export class BlogModule { }
