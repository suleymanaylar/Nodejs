import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthorComponent } from './component/author/author.component';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import { RegisterComponent } from './component/register/register.component'

@NgModule({
  declarations: [
    AppComponent,
    AuthorComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
