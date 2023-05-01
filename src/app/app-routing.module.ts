import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MaterialFormComponent } from './material-form/material-form.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';

const routes: Routes = [
  { path: 'template', component: MaterialFormComponent },
  { path: 'reactive', component: ReactiveFormComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
