import { Component } from '@angular/core';
// import { Art } from './art';
import { Art } from './models/art.model';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'The MET';
  currentHeadline: string = 'Experience 5,000 Years of Art at The Met';

 // 
 //  masterArtList: Art[] = [
 //   new Art('Textile Sample', 'Dagobert Peche', 'Silk', 'ca 1920'),
 //   new Art('New York #2', 'Hedda Sterne', 'Oil on Canvas', '1953'),
 //   new Art('Double Standard', 'Terry Winters', 'Lithograph print', '1984'),
 //   new Art('\"Faster\"','Paul Schwieder', 'Glass', '2002'),
 //   new Art('Reclining Semi-Nude with Arms Raised', 'Egon Shiele', 'Graphite on Paper', '1914'),
 //   new Art('Bauhaus Archive', 'Gertrud Preiswerk', 'Watercolor', 'Unknown')
 // ];
}
