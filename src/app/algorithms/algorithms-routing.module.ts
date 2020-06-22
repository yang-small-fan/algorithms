import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AlgorithmsComponent } from './algorithms.component';
import { SessionOneComponent } from './session-one/session-one.component';
import { SessionTwoComponent } from './session-two/session-two.component';
import { SessionThreeComponent } from './session-three/session-three.component';


const routes: Routes = [
  {
    path: '',
    component: AlgorithmsComponent,
    children: [
      {
        path: 'session-one',
        component: SessionOneComponent,
      },
      {
        path: 'session-two',
        component: SessionTwoComponent,
      },
      {
        path: 'session-three',
        component: SessionThreeComponent,
      }
    ]
  }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AlgorithmsRoutingModule { }
