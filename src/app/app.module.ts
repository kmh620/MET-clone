import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { TicketsComponent } from './tickets/tickets.component';
import { ExhibitionCurrentComponent } from './exhibition-current/exhibition-current.component';
import { EventsComponent } from './events/events.component';
import { CollectionComponent } from './collection/collection.component';
import { LearnStudentComponent } from './learn-student/learn-student.component';
import { MembershipComponent } from './membership/membership.component';
import { ShopComponent } from './shop/shop.component';
import { HomeComponent } from './home/home.component';


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
    HomeComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
