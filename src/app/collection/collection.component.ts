import { Component, OnInit } from '@angular/core';
import { Art } from '../art';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-collection',
  templateUrl: './collection.component.html',
  styleUrls: ['./collection.component.css']
})
export class CollectionComponent implements OnInit {
  artworks = this.masterArtList;

  constructor() { }

  ngOnInit() {
  }

}
