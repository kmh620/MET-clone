import { Component, OnInit } from '@angular/core';
import { FirebaseListObservable } from 'angularfire2/database';

@Component({
  selector: 'app-open-access',
  templateUrl: './open-access.component.html',
  styleUrls: ['./open-access.component.css']
})
export class OpenAccessComponent implements OnInit {
    artworks: FirebaseListObservable<any[]>;

  constructor() { }

  ngOnInit() {
  }

}
