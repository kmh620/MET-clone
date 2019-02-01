import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { masterFirebaseConfig } from './api-keys';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';

import { AppComponent } from './app.component';
import { TicketsComponent } from './tickets/tickets.component';
import { ExhibitionCurrentComponent } from './exhibition-current/exhibition-current.component';
import { EventsComponent } from './events/events.component';
import { CollectionComponent } from './collection/collection.component';
import { LearnStudentComponent } from './learn-student/learn-student.component';
import { MembershipComponent } from './membership/membership.component';
import { ShopComponent } from './shop/shop.component';
import { HomeComponent } from './home/home.component';
import { routing } from './app.routing';
import { ArtHistoryComponent } from './art-history/art-history.component';
import { OnlineFeaturesComponent } from './online-features/online-features.component';
import { PublicationsComponent } from './publications/publications.component';
import { LibrariesComponent } from './libraries/libraries.component';
import { OpenAccessComponent } from './open-access/open-access.component';

export const firebaseConfig = {
  apiKey: masterFirebaseConfig.apiKey,
  authDomain: masterFirebaseConfig.authDomain,
  databaseURL: masterFirebaseConfig.databaseURL,
  storageBucket: masterFirebaseConfig.storageBucket
};


@NgModule({
  declarations: [
    AppComponent,
    TicketsComponent,
    ExhibitionCurrentComponent,
    EventsComponent,
    CollectionComponent,
    LearnStudentComponent,
    MembershipComponent,
    ShopComponent,
    HomeComponent,
    ArtHistoryComponent,
    OnlineFeaturesComponent,
    PublicationsComponent,
    LibrariesComponent,
    OpenAccessComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
