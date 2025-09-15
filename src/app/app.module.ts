import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { provideHttpClient } from '@angular/common/http';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { ProductModule } from './product/product.module';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule, // Rely on AppRoutingModule for routing
    ProductModule
  ],
  providers: [
    provideHttpClient(),
    provideAnimationsAsync() // Provide HTTP client services
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}