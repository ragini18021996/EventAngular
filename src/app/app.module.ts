import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import {RouterModule} from '@angular/router';
import {FormsModule} from '@angular/forms';
import { AppRoutingModule,RouterTable } from './app-routing.module';

import {HttpClientModule} from '@angular/common/http';
  

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule ,FormsModule,HttpClientModule,
    RouterModule.forRoot(RouterTable)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
