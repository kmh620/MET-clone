import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class MetArtApiService {

  constructor(private http: Http) { }


  getArt() {
     return this.http.get(`https://collectionapi.metmuseum.org/public/collection/v1/objects/isPublicDomain=true`)primaryImage
  }
}
