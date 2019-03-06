import {MatButtonModule, MatCheckboxModule, MatGridListModule, MatIconModule, MatChipsModule, MatMenuModule} from '@angular/material';
import { NgModule } from '@angular/core';

@NgModule({
  imports: [MatButtonModule, MatCheckboxModule, MatGridListModule, MatIconModule, MatChipsModule, MatMenuModule],
  exports: [MatButtonModule, MatCheckboxModule, MatGridListModule, MatIconModule, MatChipsModule, MatMenuModule],
})
export class MaterialModule { }