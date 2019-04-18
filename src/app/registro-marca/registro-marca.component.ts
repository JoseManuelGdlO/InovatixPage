import { Component, OnInit } from '@angular/core';
import { CorreoService } from '../correo.service';
import { ActivatedRoute } from '@angular/router';
import {MatDialog} from '@angular/material';
import { DivisionesComponent }from '../divisiones/divisiones.component';
import { Router, NavigationEnd } from '@angular/router';


@Component({
  selector: 'app-registro-marca',
  templateUrl: './registro-marca.component.html',
  styleUrls: ['./registro-marca.component.scss']
})
export class RegistroMarcaComponent implements OnInit {

  name:any;
  empresa:any;
  telefono:any;
  email:any;
  producto:any;
  mensaje:any;


  id:any;
  texto:string;
  titulo:string;
  imagen:string;

  constructor(public correo: CorreoService,private _Activatedroute:ActivatedRoute, public dialog: MatDialog , private router: Router, private rutaActiva: ActivatedRoute) { 
    this.id=this._Activatedroute.snapshot.params['id'];

    this.openDialog(this.id);

    console.log("ID: "+this.id);

  }

  openDialog(ip:any){
    if(ip == 1){
      ///Diseño de logotipo

      this.titulo="¡Diseñamos tu Logotipo¡";
      this.texto ="Inovatix es un estudio de diseño apasionado por las marcas, el buen branding, más conocido como Diseño de logos. Aunque desde luego que no solo es “diseñar”. Crear buenas marcas requiere de trabajar muy duro hasta lograr un resultado que parezca muy fácil. Hay que analizar, pensar, contrastar, hacer bocetos, conceptualizar, hasta ir logrando las primeras semillas que luego hay que desarrollar, con toda la pasión y compromiso que nos caracteriza.";
      this.imagen="assets/img/logo_flor.png";

      const dialogRef = this.dialog.open(DivisionesComponent, {
        width: '90%',
        height: '80%',
        data: {titulo: this.titulo, texto: this.texto, imagen: this.imagen}
      });
     
    }else if(ip == 2){
      ///Registro de marca
     
      this.titulo="Registro de Marca";
      this.texto ="Una marca es todo signo visible que distingue productos o servicios de otros de su misma especie o clase en el mercado. Su uso exclusivo se obtiene mediante su registro ante el Instituto Mexicano de la Propiedad Industrial (IMPI). El registro de tu marca la convierte automáticamente en un activo intangible para tu empresa; permite que su protección se extienda a todo el territorio nacional; te otorga a ti, como empresario o productor, el derecho a utilizar los símbolos R (Registrada) o MR (Marca Registrada); te brinda la posibilidad de que otorgues Licencias de Uso de Marca, o bien, de estar en posibilidad de poder cobrar regalías a quienes tú les permitas su uso.";
      this.imagen="assets/img/registro_marca/marcastar.png";

      const dialogRef = this.dialog.open(DivisionesComponent, {
        width: '90%',
        height: '80%',
        data: {titulo: this.titulo, texto: this.texto, imagen: this.imagen}
      });
      

    }
  }


  ngOnInit() {
  }

  onSubmit() {

    console.log("Nombre: "+this.name+"   Empresa: "+this.empresa+"   telefono: "+this.telefono+"   Correo: "+this.email+"   Producto: "+this.producto);
    
  this.correo.envioCorreo(this.name, this.empresa, this.telefono, this.email, this.producto, this.mensaje).then(
    (data) => { 
      console.log(data)  

       


    },
    (error) =>{
      console.log("Error"+JSON.stringify(error));
     
    }
  );

  this.name="";
    this.empresa="";
    this.telefono="";
    this.email="";
    this.producto="";
    this.mensaje="";
}

}
