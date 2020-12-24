import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';

const routes: Routes = [
  {
    path:'',
    loadChildren:()=>import('./user/user.module').then(mod => mod.UserModule),
    data: {
      preload: true,
      delay: false
    }
  },
  {
    path:'inicio',
    loadChildren:()=>import('./otros/otros.module').then(mod => mod.OtrosModule),
    data: {
      preload: true,
      delay: false
    }
  },
  {
    path:'proveedores',
    loadChildren:()=>import('./proveedor/proveedor.module').then(mod => mod.ProveedorModule),
    data: {
      preload: true,
      delay: false
    }
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{
    //enableTracing:true, //<-- debuggin
    preloadingStrategy:PreloadAllModules
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
