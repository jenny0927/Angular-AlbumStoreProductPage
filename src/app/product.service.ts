import { Injectable } from '@angular/core';
import {Http, Response} from '@angular/http';
import {Album} from './album';
import 'rxjs/add/operator/map';
import {Observable} from 'rxjs/Observable';
import {Product} from './product';

@Injectable()
export class ProductService {
  private _productService;

  private _albumUrl = '../assets/album.json';

  constructor(private _http: Http) { }

  getAlbum(id: number): Observable<Album> {

    return this._http.get(this._albumUrl).map((response) => <Album>response.json());
  }

  getProducts(){
    return this._http.get(_productUrl)
  }
}
