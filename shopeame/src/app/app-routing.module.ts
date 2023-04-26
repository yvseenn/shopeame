import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { PrendasComponent } from './pages/prendas/prendas.component';
import { GestionComponent } from './pages/gestion/gestion.component';
import { ProductoComponent } from './components/producto/producto.component';

const routes: Routes = [
  {path:'', component:HomeComponent},
  {path:'prendas', component:PrendasComponent},
  {path:'prendas/:id', component:ProductoComponent},
  {path:'gestion', component:GestionComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
