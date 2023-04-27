import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { PrendasComponent } from './pages/prendas/prendas.component';
import { GestionComponent } from './pages/gestion/gestion.component';
import { ProductoComponent } from './components/producto/producto.component';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { RegistroFormComponent } from './components/registro-form/registro-form.component';

const routes: Routes = [
  {path:'', component:HomeComponent},
  {path:'productos', component:PrendasComponent},
  {path:'productos/:id', component:ProductoComponent},
  {path:'gestion', component:GestionComponent},
  {path: "login", component:LoginFormComponent},
  {path: "registro",  component:RegistroFormComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
