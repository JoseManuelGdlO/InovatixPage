import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PrincipalesProyectosComponent } from './principales-proyectos/principales-proyectos.component';
import { TiendaLineaComponent } from './tienda-linea/tienda-linea.component';
import { RegistroMarcaComponent } from './registro-marca/registro-marca.component';
import { DesarrolloEmpresarialComponent } from './desarrollo-empresarial/desarrollo-empresarial.component';
import { ContactanosComponent } from './contactanos/contactanos.component';

const routes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full'},
  { path: 'contactanos', component: ContactanosComponent, pathMatch: 'full'},
  { path: 'desarrollo', component: DesarrolloEmpresarialComponent, pathMatch: 'full'},
  { path: 'proyectos', component: PrincipalesProyectosComponent, pathMatch: 'full'},
  { path: 'marca', component: RegistroMarcaComponent, pathMatch: 'full'},
  { path: 'tienda', component: TiendaLineaComponent, pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
