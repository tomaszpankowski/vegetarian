import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EventRoutingModule } from './event-routing.module';
import { EventComponent } from './event/event.component';
import { EventS1Component } from './event-s1/event-s1.component';
import { EventS2Component } from './event-s2/event-s2.component';


@NgModule({
  declarations: [
    EventComponent,
    EventS1Component,
    EventS2Component
  ],
  imports: [
    CommonModule,
    EventRoutingModule
  ]
})
export class EventModule { }
