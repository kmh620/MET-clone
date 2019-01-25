import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { Art } from './models/art.model';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root',
})


export class CollectionService {
  private collectionsUrl = 'api/art';

  constructor(
    private http: HttpClient) { }

    getCollections (): Observable<Art[]> {
      return this.http.get<Art[]>(this.collectionsUrl)
      .pipe(
        tap(_ => this.log('fetched art')),
        catchError(this.handleError('getCollectionss', []))
      );
}
