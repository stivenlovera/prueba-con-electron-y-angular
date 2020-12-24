import { NgModule,CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
//import { CommonModule } from '@angular/common';
import { ProveedorRoutingModule } from './proveedor-routing.module';
import { ProveedorComponent } from './proveedor/proveedor.component';
import { OtrosModule } from '../otros/otros.module';

@NgModule({
  declarations: [
    ProveedorComponent,
  ],
  imports: [

    ProveedorRoutingModule,
    OtrosModule
  ],
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class ProveedorModule { }
