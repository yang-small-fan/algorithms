import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: 'algorithms',
    loadChildren: () => import('./algorithms/algorithms.module').then(m => m.AlgorithmsModule)
  },
  {
    path: '', redirectTo: '/algorithms', pathMatch: 'full'
  },
  {
    path: '**', redirectTo: 'algorithms', pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
