import { Routes } from '@angular/router';
import {TechEventsComponent} from "./tech-events/tech-events.component";
import {PageNotFoundComponent} from "./page-not-found/page-not-found.component";
import {EventDetailsComponent} from "./tech-events/event-details/event-details.component";

export const routes: Routes = [
  {path: 'events', component: TechEventsComponent},
  {path: 'events/:id', component: EventDetailsComponent},
  {path: '404', component: PageNotFoundComponent},
  {path: '**', redirectTo: '/404'}
];
