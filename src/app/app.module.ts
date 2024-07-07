import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './component/login/login.component';
import { CategoryComponent } from './component/category/category.component';
import { TokenInterceptorInterceptor } from './interceptor/token-interceptor.interceptor';
import { DynamicTreeComponent } from './component/dynamic-tree/dynamic-tree.component';
import { CategoryFormComponent } from './component/category-form/category-form.component';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    CategoryComponent,
    DynamicTreeComponent,
    CategoryFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MatIconModule,
    FormsModule
  ],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: TokenInterceptorInterceptor, multi: true}
  ],
  bootstrap: [AppComponent],
  schemas: [NO_ERRORS_SCHEMA]
})
export class AppModule { }
