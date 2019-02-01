import { Injectable } from '@angular/core';
import { Art } from './models/art.model';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Injectable()
export class ArtService {
  artworks: FirebaseListObservable<any[]>;

  constructor(private database: AngularFireDatabase) {
    this.artworks = database.list('artworks');
  }
  getArt(){
    return this.artworks;
  }

}
