import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'inovatixWeb';

  constructor(private router: Router, private rutaActiva: ActivatedRoute) { 

  
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

