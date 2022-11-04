import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  { 
    path: '',   
    redirectTo: 'visa-card-dispenser',
    pathMatch: 'full'
  },
  {
    path:'visa-card-dispenser',
    loadChildren:()=>import('./modules/visa-card-dispenser/visa-card-dispenser.module').then(m => m.VisaCardDispenserModule)
  },
  {
    path:'**',
    redirectTo: 'visa-card-dispenser',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
