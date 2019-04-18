import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MaterialModule } from './material';
import { PrincipalesProyectosComponent } from './principales-proyectos/principales-proyectos.component';
import { TiendaLineaComponent } from './tienda-linea/tienda-linea.component';
import { RegistroMarcaComponent } from './registro-marca/registro-marca.component';
import { DesarrolloEmpresarialComponent } from './desarrollo-empresarial/desarrollo-empresarial.component';
import { ContactanosComponent } from './contactanos/contactanos.component';
import { HttpClientModule } from '@angular/common/http';

import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { TecnologiasComponent } from './tecnologias/tecnologias.component';
import { ParallaxDirective } from './parallax.directive';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MobiliarioComponent } from './mobiliario/mobiliario.component';
import { ImprentaComponent } from './imprenta/imprenta.component';
import { DivisionesComponent } from './divisiones/divisiones.component';




@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PrincipalesProyectosComponent,
    TiendaLineaComponent,
    RegistroMarcaComponent,
    DesarrolloEmpresarialComponent,
    ContactanosComponent,
    TecnologiasComponent,
    ParallaxDirective,
    MobiliarioComponent,
    ImprentaComponent,
    DivisionesComponent  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    MDBBootstrapModule.forRoot(),
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  entryComponents: [DivisionesComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
