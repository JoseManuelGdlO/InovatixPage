import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {MatDialog} from '@angular/material';
import { DivisionesComponent }from '../divisiones/divisiones.component';

@Component({
  selector: 'app-tecnologias',
  templateUrl: './tecnologias.component.html',
  styleUrls: ['./tecnologias.component.scss']
})
export class TecnologiasComponent implements OnInit {
  id:any;
  texto:string;
  imagen:string;
  titulo:string;
 
  

  constructor(private _Activatedroute:ActivatedRoute, public dialog: MatDialog) { 
    this.id=this._Activatedroute.snapshot.params['id'];

   this.openDialog(this.id);

    console.log("ID: "+this.id);
  }


  openDialog(ip:any){
    if(ip == 1){
      ///punto de venta 

      this.titulo="Punto de Venta";
      this.texto ="Instalamos tu Sistema Punto de Venta o POS (Point of Sale) en el que podrás automatizar tus cobros, cobrar con tarjetas, administrar tus inventarios, tus compras y ¡mucho más! Contamos con el producto a tu medida y presupuesto.";
      this.imagen="assets/img/tecnologias/e-comrece.png";

      const dialogRef = this.dialog.open(DivisionesComponent, {
        width: '90%',
        height: '80%',
        data: {titulo: this.titulo, texto: this.texto, imagen: this.imagen}
      });
     
    }else if(ip == 2){
      ///App
     
      this.titulo="Aplicaciones Moviles";
      this.texto ="Aunque no parezca, las aplicaciones llevan tiempo entre nosotros. Antes de empezar a diseñarlas, queremos que las conozcas: ¿Cuáles son sus tipos y características? ¿Qué diferencias hay entre ellas y con una web móvil? Las aplicaciones —también llamadas apps— están presentes en los teléfonos desde hace tiempo; de hecho, ya estaban incluidas en los sistemas operativos de Nokia o Blackberry años atrás. Los móviles de esa época, contaban con pantallas reducidas y muchas veces no táctiles, y son los que ahora llamamos feature phones, en contraposición a los smartphones, más actuales.      ";
      this.imagen="assets/img/tecnologias/apps_moviles.png";

      const dialogRef = this.dialog.open(DivisionesComponent, {
        width: '90%',
        height: '80%',
        data: {titulo: this.titulo, texto: this.texto, imagen: this.imagen}
      });
      

    }else if(ip == 3){
      ///Pagina
      this.titulo="Pagina Web";
      this.texto ="Da a conocer tu producto y/o servicio, creando tu página web a la medida de tus necesidades, para un mejor funcionamiento y administración de tu negocio. Facilítale a tus clientes la manera de contactarte de una forma rápida y sencilla.  ";
      this.imagen="assets/img/tecnologias/e-comrece.png";

      const dialogRef = this.dialog.open(DivisionesComponent, {
        width: '90%',
        height: '80%',
        data: {titulo: this.titulo, texto: this.texto, imagen: this.imagen}
      });

    }else if(ip == 4){
      ///Software
      this.titulo="Software a la Medida";
      this.texto ="Creamos herramientas informáticas para cuando en tu negocio tienes una necesidad y no existe en el mercado un producto que se adecúe a ella.  El sistema creado se adapta a los procesos de gestión que la empresa ya tiene consolidados. Desarrollamos diferentes tipos de software con múltiples lenguajes de programación como aplicaciones de escritorio internas o con conexión a bases de datos externas, aplicaciones web, software para centros con control de ordenadores, plataformas de gestión de entidades.";
      this.imagen="assets/img/tecnologias/e-comrece.png";

      const dialogRef = this.dialog.open(DivisionesComponent, {
        width: '90%',
        height: '80%',
        data: {titulo: this.titulo, texto: this.texto, imagen: this.imagen}
      });



    }else if(ip == 5){
      ///Equipo de Computo
      this.titulo="Equipo de Computo";
      this.texto ="Te ofrecemos una variedad de equipo de cómputo para que organices tu oficina. Te damos opciones acomodándonos a tu presupuesto y necesidades. ";
      this.imagen="assets/img/tecnologias/compu.png";

      const dialogRef = this.dialog.open(DivisionesComponent, {
        width: '90%',
        height: '80%',
        data: {titulo: this.titulo, texto: this.texto, imagen: this.imagen}
      });



    }
  }
  

  ngOnInit() {
  }


}
