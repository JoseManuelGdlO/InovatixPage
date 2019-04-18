import {MatButtonModule, MatCheckboxModule, MatGridListModule, MatIconModule, MatChipsModule, MatMenuModule, MatBottomSheetModule, MatCardModule} from '@angular/material';
import {MatDialogModule} from '@angular/material/dialog';

import {MatFormFieldModule} from '@angular/material/form-field';
import { NgModule } from '@angular/core';

@NgModule({
  imports: [MatButtonModule, MatCheckboxModule, MatGridListModule, MatIconModule, MatChipsModule, MatMenuModule, MatBottomSheetModule, MatCardModule, MatFormFieldModule,MatDialogModule],
  exports: [MatButtonModule, MatCheckboxModule, MatGridListModule, MatIconModule, MatChipsModule, MatMenuModule, MatBottomSheetModule, MatCardModule, MatFormFieldModule,MatDialogModule],
})
export class MaterialModule { }