import { NgModule, CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserRoutingModule } from './user-routing.module';
import { LoginComponent } from './login/login.component';
import { UsuarioComponent } from './usuario/usuario.component';
import { OtrosModule } from '../otros/otros.module';
import { FormsModule} from '@angular/forms';
@NgModule({
  declarations: [
    LoginComponent,
    UsuarioComponent
    ],
  imports: [
    CommonModule,
    UserRoutingModule,
    OtrosModule,
    FormsModule
  ],
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class UserModule { }
