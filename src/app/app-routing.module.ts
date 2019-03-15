import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PrincipalesProyectosComponent } from './principales-proyectos/principales-proyectos.component';
import { TiendaLineaComponent } from './tienda-linea/tienda-linea.component';
import { RegistroMarcaComponent } from './registro-marca/registro-marca.component';
import { DesarrolloEmpresarialComponent } from './desarrollo-empresarial/desarrollo-empresarial.component';
import { ContactanosComponent } from './contactanos/contactanos.component';
import { TecnologiasComponent } from './tecnologias/tecnologias.component';

const routes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full'},
  { path: 'contactanos', component: ContactanosComponent},
  { path: 'desarrollo', component: DesarrolloEmpresarialComponent},
  { path: 'proyectos', component: PrincipalesProyectosComponent},
  { path: 'marca', component: RegistroMarcaComponent},
  { path: 'tienda', component: TiendaLineaComponent},
  { path: 'tecnologias', component: TecnologiasComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
