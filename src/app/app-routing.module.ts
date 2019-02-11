import { NgModule } from '@angular/core';
import { Routes, RouterModule, CanActivate } from '@angular/router';
import { EventsListComponent } from './events/events-list.component';
import { EventDetailsComponent } from './events/event-details/event-details.component';
import { CreateEventComponent } from './events/create-event.component';
import { Error404Component } from './errors/404.component';
import { EventListResolver } from './events/events-list-resolver.service';
import { CreateSessionComponent } from './events/event-details/create-session.component';
import { EventResolver } from './events/event-resolver.service';

const routes: Routes = [
  { path: 'events', component: EventsListComponent, resolve: { events: EventListResolver } },
  { path: 'events/new', component: CreateEventComponent, canDeactivate: ['canDeactivateCreateEvent'] },
  { path: 'events/:id', component: EventDetailsComponent, resolve: { event: EventResolver }},
  { path: 'events/session/new', component: CreateSessionComponent },
  { path: '404', component: Error404Component },
  { path: '', pathMatch: 'full', redirectTo: '/events' },
  { path: 'user', loadChildren: './user/user.module#UserModule' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
