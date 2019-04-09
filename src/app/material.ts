import {MatButtonModule, MatCheckboxModule, MatGridListModule, MatIconModule, MatChipsModule, MatMenuModule, MatBottomSheetModule, MatCardModule} from '@angular/material';
import {MatFormFieldModule} from '@angular/material/form-field';
import { NgModule } from '@angular/core';

@NgModule({
  imports: [MatButtonModule, MatCheckboxModule, MatGridListModule, MatIconModule, MatChipsModule, MatMenuModule, MatBottomSheetModule, MatCardModule, MatFormFieldModule],
  exports: [MatButtonModule, MatCheckboxModule, MatGridListModule, MatIconModule, MatChipsModule, MatMenuModule, MatBottomSheetModule, MatCardModule, MatFormFieldModule],
})
export class MaterialModule { }