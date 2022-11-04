import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RequestCardComponent } from './request-card/request-card.component';
import { VisaCardDispenserRoutingModule } from './visa-card-dispenser-routing.module';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    RequestCardComponent
  ],
  imports: [
    CommonModule,
    InputTextModule,
    ButtonModule,
    TableModule,
    ReactiveFormsModule,
    VisaCardDispenserRoutingModule
  ]
})
export class VisaCardDispenserModule { }

