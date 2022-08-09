import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductListDetailsComponent } from './product-list-details/product-list-details.component';
import { PracticeOneComponent } from './practice-one/practice-one.component';
import { FormsModule } from '@angular/forms';
import { CoreModule } from '../core/core.module';



@NgModule({
  declarations: [
    ProductListDetailsComponent,
    PracticeOneComponent
  ],
  imports: [
    CommonModule,
    FormsModule,CoreModule
  ],
  exports:[
    PracticeOneComponent
  ]
})
export class LectureOneModule { }
