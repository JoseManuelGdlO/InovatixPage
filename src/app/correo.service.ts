import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class CorreoService {

  constructor(private http: HttpClient) { }


  envioCorreo(nombre:string, empresa:string, telefono:string, email:string, producto:string, mensaje:string){

   
    var url = 'http://pruebas.mercapymex.com/correo.php?nombre='+nombre+'&empresa='+empresa+'&telefono='+telefono+'&email='+email+'&producto='+producto+'&mensaje='+mensaje;
    return new Promise((resolve, reject) => {
     this.http.get(url)
        .subscribe(data => {
          resolve(data);
         }, (err) =>{
           reject(err);
         });
    });
   }

}
