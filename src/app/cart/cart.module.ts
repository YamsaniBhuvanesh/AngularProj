import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { CartViewComponent } from './cart-view/cart-view.component';
import { MatListModule } from '@angular/material/list';

@NgModule({
  declarations: [],
  imports: [
    MatCardModule,
    MatListModule
  ]
})
export class CartModule { }
