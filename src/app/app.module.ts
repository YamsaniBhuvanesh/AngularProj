import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { provideHttpClient } from '@angular/common/http';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { ProductModule } from './product/product.module';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; // Required for Material animations
import { MatCardModule } from '@angular/material/card'; // Example Material module
import { MatButtonModule } from '@angular/material/button'; // Example Material module
import { ProductListComponent } from './product/product-list/product-list.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import { CartModule } from './cart/cart.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,ProductListComponent,
    BrowserAnimationsModule,
    AppRoutingModule, // Rely on AppRoutingModule for routing
    ProductModule,
    MatCardModule,
    MatButtonModule,
    MatToolbarModule,
    CartModule
  ],
  providers: [
    provideHttpClient(),
    provideAnimationsAsync() // Provide HTTP client services
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}