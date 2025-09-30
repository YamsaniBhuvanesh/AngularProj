import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { Product } from '../../models/product';
import { CommonModule } from '@angular/common';
import { MatCardModule } from "@angular/material/card";
import { CartService } from '../../cart/cart.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInput } from "@angular/material/input";

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatFormFieldModule, MatInput],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent implements OnInit{

  products:Product[]=[];
  filteredProducts : Product[]=[];
  
  constructor(private productService:ProductService,private cartService:CartService,private snackbar:MatSnackBar) {}
  
  ngOnInit(): void {
    this.productService.getProducts().subscribe(data=>{
      this.products = data;
      this.filteredProducts = data;
    })
  }

  addToCart(Product:Product):void{
    this.cartService.addToCart(Product).subscribe({
      next: ()=>{
        this.snackbar.open("Product Added to cart","",{
          duration: 2000,
          horizontalPosition:'right',
          verticalPosition:'top'
        });
      }
    });
  }

  applyFilter(event:Event):void{
    let searchTerm=(event.target as HTMLInputElement).value;
    searchTerm = searchTerm.toLowerCase();

    this.filteredProducts = this.products.filter(
      product=>product.name.toLowerCase().includes(searchTerm)
    )
  }

}
