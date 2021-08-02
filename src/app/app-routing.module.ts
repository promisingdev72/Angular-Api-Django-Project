import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConsumeComponent } from './consume/consume.component';

const routes: Routes = [
  { path: '', component: ConsumeComponent },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
