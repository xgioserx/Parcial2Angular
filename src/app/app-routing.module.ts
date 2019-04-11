import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './components/users/login/login.component';
import { RegisterComponent } from './components/users/register/register.component';
import { NotFoundComponent } from './components/errors/not-found/not-found.component';
import { HomeComponent } from './components/home/home.component';
import { ListadoProductosComponent } from './components/admin/listado-productos/listado-productos.component';
import { DetalleProductoComponent } from './components/detalle-producto/detalle-producto.component';

const routes: Routes = [{
  path:'',
  component: HomeComponent,
  pathMatch:'full'
},
{
  path:'login',
  component:LoginComponent
},
{
  path:'register',
  component:RegisterComponent
},{
  path:'admin',
  component:ListadoProductosComponent
},{
  path:'productos',
  component:DetalleProductoComponent
},{
  path:'**',
  component:NotFoundComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
