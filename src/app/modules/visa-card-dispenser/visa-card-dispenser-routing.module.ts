import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RequestCardComponent } from './request-card/request-card.component';

const routes: Routes = [
  {
    path:'**',
    redirectTo: 'request-card',
  },
  {
    component:RequestCardComponent,
    path:"request-card"
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VisaCardDispenserRoutingModule { }
