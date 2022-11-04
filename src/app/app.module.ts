import { NgModule, DoBootstrap, Injector, NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {ButtonModule} from 'primeng/button';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from "@angular/common/http";
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {PanelMenuModule} from 'primeng/panelmenu';
import { CookieService } from 'ngx-cookie-service';
import {InputTextModule} from 'primeng/inputtext';
import { ConfirmPopupModule} from 'primeng/confirmpopup';
import { DialogModule } from 'primeng/dialog';
import {SidebarModule} from 'primeng/sidebar';
import {DropdownModule} from 'primeng/dropdown';
import { VisaCardDispenserModule } from './modules/visa-card-dispenser/visa-card-dispenser.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    PanelMenuModule,
    DialogModule,
    ConfirmPopupModule,
    InputTextModule,
    ButtonModule,
    SidebarModule,
    DropdownModule,
    VisaCardDispenserModule,

  ],
  providers: [
    CookieService
  ],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})

export class AppModule  {

 }
