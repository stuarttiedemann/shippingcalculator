import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './app-routing-module';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { AboutComponent } from './about/about.component';
import { ErrorpageComponent } from './errorpage/errorpage.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CalculatorComponent,
    AboutComponent,
    ErrorpageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
