import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './list/list.component';
import { DetailsComponent } from './details/details.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ListComponent, DetailsComponent]
})
export class ClinicsModule { }
