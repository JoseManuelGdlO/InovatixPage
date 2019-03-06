import { Component, OnInit } from '@angular/core';
import {ThemePalette} from '@angular/material/core';

export interface ChipColor {
  name: string;
  color: ThemePalette;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  availableColors: ChipColor[] = [
    {name: 'Administracion de proyectos', color: 'warn'},
    {name: 'Tienda en Linea', color: 'primary'},
    {name: 'Aplicaciones Moviles', color: 'primary'},
    {name: 'Diseño y Registro de Marca', color: 'primary'}
  ];

  constructor() { }

  ngOnInit() {
  }

}
