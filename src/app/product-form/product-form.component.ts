import { Component, OnInit } from '@angular/core';

import {Location} from "@angular/common";
import {ProductService} from "../product.service";
import {CreateProductDto} from "../product-class";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit {

  constructor(
    private location: Location,
    private productService: ProductService,
    public activatedRoute: ActivatedRoute,
    public router: Router
  ) { }

  ngOnInit(): void {
  }

  types = ['Sneakers', 'Jeans', 'Trousers'];

  model = new CreateProductDto('Stan Smith', this.types[0], 1000, 'Adidas');

  submitted = false;

  submit() {
    this.submitted = true;
  }

  newProduct() {
    this.model = new CreateProductDto('', '', 0, '');
  }

  onSubmit() {
    this.submitted = true;
  }

  confirm() {
    // product: CreateProductDto;
    this.productService.create(this.model).subscribe(
      // product=> this.router.navigate(['product/'.concat(product.id)])
      product=> {
        if(product.id != undefined) {
          this.router.navigate(['product/'+ product.id])
        }
      }
    );

  }

  goBack() {
    this.location.back()
  }
}
