import { Component, OnInit } from '@angular/core';
import { MatBottomSheetRef } from '@angular/material';


@Component({
  selector: 'app-vermas',
  templateUrl: './vermas.component.html',
  styleUrls: ['./vermas.component.scss']
})
export class VermasComponent implements OnInit {

  constructor(private bottomSheetRef: MatBottomSheetRef<VermasComponent>) { }

  ngOnInit() {
  }

  openLink(event: MouseEvent): void {
    this.bottomSheetRef.dismiss();
    event.preventDefault();
  }

}
