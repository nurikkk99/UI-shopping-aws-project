import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {Image} from "./image";
import {HttpClient} from "@angular/common/http";
import {Product} from "./product";

@Injectable({
  providedIn: 'root'
})
export class ImageService {

  private imagesUrl = 'http://localhost:8081/api/goods'

  constructor(
    private http: HttpClient
  ) { }

  getAllImagesOfGood(id: number): Observable<Image[]> {
    const url = this.imagesUrl.concat('/', String(id), '/image')
    return this.http.get<Image[]>(url);
  }

  getImage(goodId: number, imageId: number): Observable<Image> {
    const url = this.imagesUrl.concat(String(goodId), 'image', String(imageId));
    return this.http.get<Image>(url);
  }
}
