import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ProductListComponent} from "./product-list/product-list.component";
import {ProductDetailsComponent} from "./product-details/product-details.component";
import {MainPageComponent} from "./main-page/main-page.component";

const routes: Routes = [
    { path: 'product/:id', component: ProductDetailsComponent },
    { path: 'product-list', component: ProductListComponent},
    { path: '', component: MainPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}

