import { UsuarioGuard } from './guards/usuario.guard';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { PrendasComponent } from './pages/prendas/prendas.component';
import { GestionComponent } from './pages/gestion/gestion.component';
import { ProductoComponent } from './components/producto/producto.component';
import { LoginComponent } from './pages/login/login.component';
import { RegistroComponent } from './pages/registro/registro.component';
import { LogoutComponent } from './pages/logout/logout.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'productos', component: PrendasComponent },
  { path: 'productos/:id', component: ProductoComponent },
  { path: 'gestion', component: GestionComponent, canActivate: [UsuarioGuard] },
  { path: "login", component: LoginComponent },
  { path: "registro", component: RegistroComponent },
  { path: "logout", component: LogoutComponent,canActivate: [UsuarioGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
