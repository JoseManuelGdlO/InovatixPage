import {MatButtonModule, MatCheckboxModule, MatGridListModule, MatIconModule, MatChipsModule, MatMenuModule, MatBottomSheetModule} from '@angular/material';
import { NgModule } from '@angular/core';

@NgModule({
  imports: [MatButtonModule, MatCheckboxModule, MatGridListModule, MatIconModule, MatChipsModule, MatMenuModule, MatBottomSheetModule],
  exports: [MatButtonModule, MatCheckboxModule, MatGridListModule, MatIconModule, MatChipsModule, MatMenuModule, MatBottomSheetModule],
})
export class MaterialModule { }