import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-description',
  templateUrl: './description.component.html',
  styleUrls: ['./description.component.css']
})
export class DescriptionComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  description: string = 'Hey! Welcome to the online web store. With this site you can create, delete, update products for the online store. You can also add and remove photos to products.';
}
