import { Component, OnInit } from '@angular/core';


export interface Proyectos {
  img: string;
  titulo: string;
  subtitulo: string;
}

@Component({
  selector: 'app-principales-proyectos',
  templateUrl: './principales-proyectos.component.html',
  styleUrls: ['./principales-proyectos.component.scss']
})
export class PrincipalesProyectosComponent implements OnInit {

 
  proyecto: Proyectos[] = [
      {img:'assets/img/proyectos/dgogas.png', titulo: 'CORPORATIVO DGOGAS', subtitulo: 'Desarrollo de manual de operaciones, Implementacion de tecnologia ip e instalacion de cableado Estructurado categoria 6'},
      {img:'assets/img/proyectos/SAOPAULO.jpg', titulo: 'DEPORTIVO SAO PAULO', subtitulo: 'Diseño de imagen corporativa'},
      {img:'assets/img/proyectos/proovedora.jpg', titulo: 'PROOVERDORA DE LLANTAS', subtitulo: 'Diseño de tienda en linea'},
      {img:'assets/img/proyectos/H51.jpg', titulo: 'CORPORATIVO H5', subtitulo: 'Consultoria en uso de sistemas ERP y diseño de imagen institucional '},
      {img:'assets/img/proyectos/MOBIFEST.jpg', titulo: 'MOBIEVENTOS', subtitulo: 'Registro de marca'},
      {img:'assets/img/proyectos/lasmels.jpg', titulo: 'LAS MELANCOLICAS', subtitulo: 'Desarrollo de plan de negocios '},
      {img:'assets/img/proyectos/APACSA12.jpg', titulo: 'APACSA', subtitulo: 'Registro de marca'},
      {img:'assets/img/proyectos/atusmanos.jpg', titulo: 'A TUS MANOS', subtitulo: 'Registro de marca'},
      {img:'assets/img/proyectos/bitcamp.png', titulo: 'Conferencia “Mercado Tecnológico En Durango” en Congreso Bitcamp', subtitulo: ''},
      {img:'assets/img/proyectos/TALLERTESTING.jpg', titulo: 'Taller de Control De Calidad Y Testing Para Sistemas Informaticos en Congreso Bitcamp', subtitulo: ''},
      {img:'assets/img/proyectos/CVX1.jpg', titulo: 'CVX', subtitulo: 'Registro de marca'},
      {img:'assets/img/proyectos/reycaps.jpg', titulo: 'EL REY CAPS', subtitulo: 'Registro de marca'},
      {img:'assets/img/proyectos/CONVEXA.png', titulo: 'CONVEXA', subtitulo: 'Registro de marca'},
      {img:'assets/img/proyectos/sanjuan.png', titulo: 'ESTACION SUPERSERVICIOS SAN JUAN', subtitulo: 'Desarrollo sitio de web'},
      {img:'assets/img/proyectos/GLOVE.png', titulo: 'GLOVE', subtitulo: 'Diseño de tienda en linea'},
      {img:'assets/img/proyectos/VAHER.jpg', titulo: 'GRUPO VAHER', subtitulo: 'Estandarizacion de procesos coroporativos financieros'},
      {img:'assets/img/proyectos/FEBRYL.jpg', titulo: 'FEBRYL INMOBILIARIA', subtitulo: 'Registro de marca y diseño de imagen institucional'},
      {img:'assets/img/proyectos/BUHODIAMANTE.jpg', titulo: 'BÚHO DIAMANTE', subtitulo: 'Renovacion de imagen comercial'},
      {img:'assets/img/proyectos/FYCCARRILLOS.jpg', titulo: 'FRUTERIA Y CREMERIA CARRILLOS', subtitulo: 'Registro de marca'},
      {img:'assets/img/proyectos/gas-ciudadindus.png', titulo: 'ESTACION DE SERVICIOS CIUDAD INDUSTRIAL', subtitulo: 'Tienda Online'},
      {img:'assets/img/proyectos/APACSA12.jpg', titulo: 'APACSA', subtitulo: 'Registro de marca'},
      {img:'assets/img/proyectos/FUTURA.jpg', titulo: 'ESTACION DE SERVICIOS OPERADORA FUTURA', subtitulo: 'Desarrollo de Sitio Web'},
      {img:'assets/img/proyectos/gas_holanda.png', titulo: 'ESTACION DE SERVICIOS GASOLINERA HOLANDA', subtitulo: 'Desarrollo de sitio de web'},
      {img:'assets/img/proyectos/PANETTI.jpg', titulo: 'PANETTI', subtitulo: 'Diseño de plan de negocios de  y diseño de imagen institucional'},
      {img:'assets/img/proyectos/petrocar.png', titulo: 'ESTACION DE SERVICIOS PETROCAR S.A DE C.V', subtitulo: 'Desarrollo de sitio de web'},
    ];

  
  constructor() {

  
   }

 
  ngOnInit() {
  }

}
