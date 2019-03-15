import { Component, OnInit } from '@angular/core';
import {MatBottomSheet, MatBottomSheetRef} from '@angular/material';
import { VermasComponent }from '../vermas/vermas.component';
import { ActivatedRoute } from '@angular/router';
  import { from } from 'rxjs';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  
  constructor(private bottomSheet: MatBottomSheet, private rutaActiva: ActivatedRoute) { }

  ngOnInit() {

    var component = this.rutaActiva.snapshot.params.id;
    console.log(component);
  }

  abrirModal(): void {
    this.bottomSheet.open(VermasComponent);
  }
  

}

