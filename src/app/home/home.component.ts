import { Component, OnInit } from '@angular/core';
import {MatBottomSheet, MatBottomSheetRef} from '@angular/material';
import { VermasComponent }from '../vermas/vermas.component';
  import { from } from 'rxjs';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  
  constructor(private bottomSheet: MatBottomSheet) { }

  ngOnInit() {
  }

  abrirModal(): void {
    this.bottomSheet.open(VermasComponent);
  }
  

}

