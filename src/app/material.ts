import {MatButtonModule, MatCheckboxModule, MatGridListModule, MatIconModule, MatChipsModule, MatMenuModule, MatBottomSheetModule, MatCardModule} from '@angular/material';
import { NgModule } from '@angular/core';

@NgModule({
  imports: [MatButtonModule, MatCheckboxModule, MatGridListModule, MatIconModule, MatChipsModule, MatMenuModule, MatBottomSheetModule, MatCardModule],
  exports: [MatButtonModule, MatCheckboxModule, MatGridListModule, MatIconModule, MatChipsModule, MatMenuModule, MatBottomSheetModule, MatCardModule],
})
export class MaterialModule { }