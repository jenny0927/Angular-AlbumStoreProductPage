import { Injectable } from '@angular/core';
import {Http, Response} from '@angular/http';
@Injectable()
export class ProductService {

  constructor(private _http: Http) { }
  private _albumUrl = '../assets/album.json';

  getAlbum(number id){
    
}
}
