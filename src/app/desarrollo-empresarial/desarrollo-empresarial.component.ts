import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {MatDialog} from '@angular/material';
import { DivisionesComponent }from '../divisiones/divisiones.component';
import { Router, NavigationEnd } from '@angular/router';



@Component({
  selector: 'app-desarrollo-empresarial',
  templateUrl: './desarrollo-empresarial.component.html',
  styleUrls: ['./desarrollo-empresarial.component.scss']
})
export class DesarrolloEmpresarialComponent implements OnInit {

  id:any;
  texto:string;
  titulo:string;
  imagen:string;

  constructor(private _Activatedroute:ActivatedRoute, public dialog: MatDialog , private router: Router, private rutaActiva: ActivatedRoute) { 
    this.id=this._Activatedroute.snapshot.params['id'];

    this.openDialog(this.id);

    console.log("ID: "+this.id);
  }

  openDialog(ip:any){
    if(ip == 1){
      ///punto de venta 

      this.titulo="¡Creamos tu Empresa¡";
      this.texto ="El plan de negocios permite que inicies una nueva empresa o hacer crecer ordenadamente la que ya se tiene. Elaboramos y asesoramos un modelo de planeación profesional que te permitirá desarrollar desde el concepto del negocio, inversión necesaria, proyección de ventas y todo lo necesario para aumentar las probalilidades de éxito de tu nueva empresa.";
      this.imagen="assets/img/desarrollo_emp/store.png";

      const dialogRef = this.dialog.open(DivisionesComponent, {
        width: '90%',
        height: '80%',
        data: {titulo: this.titulo, texto: this.texto, imagen: this.imagen}
      });
     
    }else if(ip == 2){
      ///Capacitacion
     
      this.titulo="Capacitación para empresas";
      this.texto ="La capacitación empresarial a formado parte de la vida cotidiana en las organizaciones. Algunos beneficios de estas actividades son la disminución de personal, mejora el desempeño, calidad de vida y con ello un aumento en las utilidades de la organización. Contamos con cursos específicos para todos los integrantes del negocio desde directores, gerentes, personal de ventas y de todos los departamentos que integran la organizacion. Éste servicio tiene como plataforma inicial la inteligencia emocional  y dinámicas como: trabajo en equipo, liderazgo humano, compromiso social, desarrollo de habilidades, integración familiar, entre otras.";
      this.imagen="assets/img/desarrollo_emp/capa.png";

      const dialogRef = this.dialog.open(DivisionesComponent, {
        width: '90%',
        height: '80%',
        data: {titulo: this.titulo, texto: this.texto, imagen: this.imagen}
      });
      

    }else if(ip == 3){
      ///Franquicias
      this.titulo="¡Convertimos tu Negocio en Franquicia!";
      this.texto ="Una FRANQUICIA es la mejor manera de MULTIPLICAR TU NEGOCIO con las practicas más seguras y exitosas, creando una relacion comercial entre dos partes: un franquiciador (dueño inicial) y franquiciado (comprador de la franquicia), nos encargamos de brindarte los servios para desarrollar tu empresa en este modelo la licencia de tu marca para su explotación comercial así como los métodos y tecnologías necesarias para multiplicar tu negocio con la INVERSIÓN DE OTROS. ";
      this.imagen="assets/img/project.png";

      const dialogRef = this.dialog.open(DivisionesComponent, {
        width: '90%',
        height: '80%',
        data: {titulo: this.titulo, texto: this.texto, imagen: this.imagen}
      });

    }
  }

  ngOnInit() {
    var component = this.rutaActiva.snapshot.params.id;
    console.log(component);
    this.router.events.subscribe((evt) => {
      if (!(evt instanceof NavigationEnd)) {
          return;
      }
      window.scrollTo(0, 0)
  });
  }

}
