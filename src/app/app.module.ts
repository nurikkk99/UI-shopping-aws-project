import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ProductListComponent } from './product-list/product-list.component';
import { FormsModule } from '@angular/forms';
import { TopBarComponent } from './top-bar/top-bar.component';
import { DescriptionComponent } from './description/description.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import {AppRoutingModule} from "./app-routing.module";
import { MainPageComponent } from './main-page/main-page.component';
import {HttpClientModule} from "@angular/common/http";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatDialogModule} from "@angular/material/dialog";
import {MatButtonModule} from "@angular/material/button";
import {ProductFormComponent} from "./product-form/product-form.component";

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    TopBarComponent,
    DescriptionComponent,
    ProductDetailsComponent,
    MainPageComponent,
    ProductFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
