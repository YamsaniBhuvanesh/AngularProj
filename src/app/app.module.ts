import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { ProductListComponent } from './product/product-list/product-list.component';
import { HttpClient } from '@angular/common/http';

@NgModule({
  declarations: [AppComponent,ProductListComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [HttpClient],
  bootstrap: [AppComponent]
})
export class AppModule {}