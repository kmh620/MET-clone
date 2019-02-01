import { Component, OnInit, Input } from '@angular/core';
// import { Art } from '../art';
import { Art } from '../models/art.model';
import { AppComponent } from '../app.component';
import { OpenAccessComponent } from '../open-access/open-access.component';

@Component({
  selector: 'app-collection',
  templateUrl: './collection.component.html',
  styleUrls: ['./collection.component.css']
})
export class CollectionComponent implements OnInit {
  masterArtList: any;

  @Input() childArtList: Art[];

  artworks =  this.masterArtList;

  constructor() { }

  ngOnInit() {
  }

}
