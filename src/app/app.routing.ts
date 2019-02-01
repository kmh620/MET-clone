import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CollectionComponent } from './collection/collection.component';
import { EventsComponent } from './events/events.component';
import { ExhibitionCurrentComponent } from './exhibition-current/exhibition-current.component';
import { LearnStudentComponent } from './learn-student/learn-student.component';
import { MembershipComponent } from './membership/membership.component';
import { ShopComponent } from './shop/shop.component';
import { TicketsComponent } from './tickets/tickets.component';
import { OpenAccessComponent } from './collection/open-access/open-access.component';


const appRoutes: Routes = [
    {
    path: '',
    component: HomeComponent
  },
  {
    path: 'collection',
    component: CollectionComponent,
    children: [
      {
        path: 'open-access',
        component: OpenAccessComponent
      }
   ]
  },
  {
    path: 'events',
    component: EventsComponent
  },
  {
    path: 'exhibitionC',
    component: ExhibitionCurrentComponent
  },
  {
    path: 'learnUSF',
    component: LearnStudentComponent
  },
  {
    path: 'membership',
    component: MembershipComponent
  },
  {
    path: 'shop',
    component: ShopComponent
  },
  {
    path: 'tickets',
    component: TicketsComponent
  }

];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
