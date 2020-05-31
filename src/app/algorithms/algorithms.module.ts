import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AlgorithmsRoutingModule } from './algorithms-routing.module';
import { SessionOneComponent } from './session-one/session-one.component';
import { AlgorithmsComponent } from './algorithms.component';
import { BrowserModule } from '@angular/platform-browser';
import { SessionTwoComponent } from './session-two/session-two.component';


@NgModule({
  declarations: [AlgorithmsComponent, SessionOneComponent, SessionTwoComponent],
  imports: [
    CommonModule,
    AlgorithmsRoutingModule
  ]
})
export class AlgorithmsModule { }
