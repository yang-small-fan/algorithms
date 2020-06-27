import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AlgorithmsRoutingModule } from './algorithms-routing.module';
import { SessionOneComponent } from './session-one/session-one.component';
import { AlgorithmsComponent } from './algorithms.component';
import { SessionTwoComponent } from './session-two/session-two.component';
import { SessionThreeComponent } from './session-three/session-three.component';
import { SessionFourComponent } from './session-four/session-four.component';


@NgModule({
  declarations: [
    AlgorithmsComponent,
    SessionOneComponent,
    SessionTwoComponent,
    SessionThreeComponent,
    SessionFourComponent
  ],
  imports: [
    CommonModule,
    AlgorithmsRoutingModule
  ]
})
export class AlgorithmsModule { }
