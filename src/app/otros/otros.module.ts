import { NgModule,CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
//import { CommonModule } from '@angular/common';
import { OtrosRoutingModule } from './otros-routing.module';

import { InicioComponent } from './inicio/inicio.component';
import { MenuComponent } from './menu/menu.component';
import { NgxChartsModule } from '@swimlane/ngx-charts';
//import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
//import { BrowserModule } from '@angular/platform-browser';
@NgModule({
  declarations: [
    InicioComponent,
    MenuComponent,
  ],
  imports: [
    OtrosRoutingModule,
    NgxChartsModule,
  ],
  schemas:[CUSTOM_ELEMENTS_SCHEMA],
  exports:[
    MenuComponent,
  ]
})
export class OtrosModule { }
