import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';



@Component({
  selector: 'app-desarrollo-empresarial',
  templateUrl: './desarrollo-empresarial.component.html',
  styleUrls: ['./desarrollo-empresarial.component.scss']
})
export class DesarrolloEmpresarialComponent implements OnInit {

  id:any;

  constructor(private _Activatedroute:ActivatedRoute) { 
    this.id=this._Activatedroute.snapshot.params['id'];

    if(this.id == 1){
      ///Plan de negocios
    }else if(this.id == 2){
      ///Capacitacion

    }else if(this.id == 3){
      ///Desarrollo de franquicias

    }

    console.log("ID: "+this.id);
  }

  ngOnInit() {
  }

}
