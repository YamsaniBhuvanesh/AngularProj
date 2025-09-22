import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card'
import { ProductListComponent } from './product-list/product-list.component';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ProductListComponent,
    MatCardModule,
  ]
})
export class ProductModule { }
