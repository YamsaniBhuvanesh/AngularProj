import { Component ,OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { Product } from '../../models/product';
import { MatCardModule } from "@angular/material/card";
import { CommonModule } from '@angular/common';
import { MatListModule } from '@angular/material/list';

@Component({
  selector: 'app-cart-view',
  standalone: true,
  imports: [CommonModule,MatCardModule,MatListModule],
  templateUrl: './cart-view.component.html',
  styleUrl: './cart-view.component.css'
})
export class CartViewComponent implements OnInit{

  cartItems : Product[]=[]; 

  constructor(private cartService:CartService){}
  ngOnInit(): void {

    this.cartService.getCartItems().subscribe(data=>{
      this.cartItems=data;
    })

    }

}
