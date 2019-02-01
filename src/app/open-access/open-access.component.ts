import { Component, OnInit } from '@angular/core';
import { FirebaseListObservable } from 'angularfire2/database';
import { ArtService } from '../art.service';
import { Router } from '@angular/router';
import { Art } from '../models/art.model';


@Component({
  selector: 'app-open-access',
  templateUrl: './open-access.component.html',
  styleUrls: ['./open-access.component.css'],
  providers: [ArtService]

})
export class OpenAccessComponent implements OnInit {
    artworks: FirebaseListObservable<any[]>;

  constructor(private router: Router, private artService: ArtService) { }

  ngOnInit() {
      this.artworks = this.artService.getArt();
    }

}
