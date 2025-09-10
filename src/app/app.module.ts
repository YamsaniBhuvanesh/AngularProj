import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { provideHttpClient } from '@angular/common/http';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule // Rely on AppRoutingModule for routing
  ],
  providers: [
    provideHttpClient() // Provide HTTP client services
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}