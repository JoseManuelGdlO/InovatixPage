import { Component, OnInit, Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';


@Component({
  selector: 'app-divisiones',
  templateUrl: './divisiones.component.html',
  styleUrls: ['./divisiones.component.scss']
})
export class DivisionesComponent implements OnInit {

  texto:string;
  titulo:string;
  imagen:string;

  constructor( public dialogRef: MatDialogRef<DivisionesComponent>,
    @Inject(MAT_DIALOG_DATA) public data: MatDialog) {

     this.texto = data['texto'];
     this.titulo = data['titulo'];
     this.imagen = data['imagen'];


     }

  ngOnInit() {
  }

}
