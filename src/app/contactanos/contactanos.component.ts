import { Component, OnInit, HostListener } from '@angular/core';
import { CorreoService } from '../correo.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-contactanos',
  templateUrl: './contactanos.component.html',
  styleUrls: ['./contactanos.component.scss']
})
export class ContactanosComponent implements OnInit {

  
  
  name:any;
  empresa:any;
  telefono:any;
  email:any;
  producto:any;
  mensaje:any;

  constructor(private fb: FormBuilder,public correo: CorreoService) {
   
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
