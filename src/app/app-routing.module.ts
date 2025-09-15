import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ProductListComponent } from './product/product-list/product-list.component';

const routes: Routes = [
  {
    path:'', redirectTo: '/products' , pathMatch:'full'
  },
  { path: 'products', component : ProductListComponent}
];

@NgModule({
  imports: [CommonModule,RouterModule.forRoot(routes)],
  exports: [RouterModule] // Export RouterModule so it’s available to AppModule
})
export class AppRoutingModule {}