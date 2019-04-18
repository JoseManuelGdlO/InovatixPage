import { Component, OnInit } from '@angular/core';
import {MatBottomSheet, MatBottomSheetRef} from '@angular/material';
import { ActivatedRoute } from '@angular/router';
import { Router, NavigationEnd } from '@angular/router';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  
  constructor(private router: Router, private bottomSheet: MatBottomSheet, private rutaActiva: ActivatedRoute) { 

  
  }

  ngOnInit() {

    var component = this.rutaActiva.snapshot.params.id;
    console.log(component);
    this.router.events.subscribe((evt) => {
      if (!(evt instanceof NavigationEnd)) {
          return;
      }
      window.scrollTo(0, 0)
  });
  }

 

  
  

}

