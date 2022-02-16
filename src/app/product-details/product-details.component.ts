import {Component, Input, OnInit} from '@angular/core';
import {ProductService} from "../product.service";
import {ActivatedRoute} from "@angular/router";
import {Product} from "../product";
import {ImageService} from "../image.service";
import {Image} from "../image";
import { Location } from '@angular/common';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  @Input() product?: Product;
  @Input() images?: Image[];

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private productService: ProductService,
    private imageService: ImageService
  ) { }

  ngOnInit(): void {
    this.getHero();
    this.getImages()
  }

  getHero(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.productService.getProduct(id)
      .subscribe(product => this.product = product);
  }

  getImages(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    console.log(id);
    this.imageService.getAllImagesOfGood(id)
      .subscribe(images => this.images = images);
  }

  // getImages(): void {
  //   of(MockImages).subscribe(images=> this.images = images);
  // }

  goBack(): void {
    this.location.back();
  }

}
