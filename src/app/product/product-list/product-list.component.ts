import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { Product } from '../../models/product';
import { CommonModule } from '@angular/common';
import { MatCardModule } from "@angular/material/card";
import { CartService } from '../../cart/cart.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInput } from "@angular/material/input";
import { MatSelect } from "@angular/material/select";
import { MatOptionModule } from "@angular/material/core";

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatFormFieldModule, MatInput, MatSelect, MatOptionModule],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent implements OnInit{

  products:Product[]=[];
  filteredProducts : Product[]=[];
  sortOrder:String = "";
  
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

    this.sortProducts(this.sortOrder)

  }


  sortProducts(sortValue:String){
    this.sortOrder=sortValue;

    if(this.sortOrder === "priceLowHigh")
    {
      this.filteredProducts.sort((a,b)=>a.price-b.price)
    }
    if(this.sortOrder === "priceHighLow")
      {
        this.filteredProducts.sort((a,b)=>b.price-a.price)
    }
  }

}
