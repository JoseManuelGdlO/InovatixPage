import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-tecnologias',
  templateUrl: './tecnologias.component.html',
  styleUrls: ['./tecnologias.component.scss']
})
export class TecnologiasComponent implements OnInit {
  id:any;

  constructor(private _Activatedroute:ActivatedRoute) { 
    this.id=this._Activatedroute.snapshot.params['id'];

    if(this.id == 1){

      window.location.href = "#tienda";
      
     
    }else if(this.id == 2){
      ///App
      window.location.href = "#app";

    }else if(this.id == 3){
      ///Pagina

    }else if(this.id == 4){
      ///Software

    }else if(this.id == 5){
      ///Equipo de Computo

    }

    console.log("ID: "+this.id);
  }
  

  ngOnInit() {
  }

}
