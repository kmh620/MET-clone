import { Component, OnInit, Input } from '@angular/core';
// import { Art } from '../art';
import { Art } from '../models/art.model';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-collection',
  templateUrl: './collection.component.html',
  styleUrls: ['./collection.component.css']
})
export class CollectionComponent implements OnInit {

  @Input() childArtList: Art[];

  artworks =  this.masterArtList;

  constructor() { }

  ngOnInit() {
  }

}
