import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { EventsAppComponent } from './events-app.component';
import { EventsListComponent } from './events/events-list.component';
import { EventThumbnailComponent } from './events/event-thumbnail.component';
import { NavBarComponent } from './nav/navbar.component';
import { EventService } from './events/shared/event.service';
import { EventDetailsComponent } from './events/event-details/event-details.component';
import { CreateEventComponent } from './events/create-event.component';
import { Error404Component } from './errors/404.component';
import { EventRouteActivator } from './events/event-details/event-route-activator.service';
import { EventListResolver } from './events/events-list-resolver.service';
import { AuthService } from './user/auth.service';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';
import { CreateSessionComponent } from './events/event-details/create-session.component';
import { SessionListComponent } from './events/event-details/session-list.component';
import { DurationPipe,
  CollapsibleWellComponent,
  TOASTR_TOKEN, IToastr,
  JQ_TOKEN,
  SimpleModalComponent,
  ModalTriggerDirective  } from './shared/index';
import { UpvoteComponent } from './events/event-details/upvote.component';
import { LocationValidatorDirective } from './events/location-validator.directive';

const toastr: IToastr = window['toastr'];
const jQuery: any = window['$'];

@NgModule({
  declarations: [
    EventsAppComponent,
    EventsListComponent,
    EventThumbnailComponent,
    NavBarComponent,
    EventDetailsComponent,
    CreateEventComponent,
    Error404Component,
    CreateSessionComponent,
    SessionListComponent,
    CollapsibleWellComponent,
    UpvoteComponent,
    SimpleModalComponent,
    DurationPipe,
    ModalTriggerDirective,
    LocationValidatorDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    EventService,
    EventRouteActivator,
    {
      provide: 'canDeactivateCreateEvent',
      useValue: checkDirtyState
    },
    EventListResolver,
    AuthService,
    {
      provide: TOASTR_TOKEN,
      useValue: toastr
    },
    {
      provide: JQ_TOKEN,
      useValue: jQuery
    }
  ],
  bootstrap: [EventsAppComponent]
})
export class AppModule { }

export function checkDirtyState(component: CreateEventComponent) {
  if (component.isDirty) {
    return window.confirm('Do you wanna CANCEL?');
  }
  return true;
}
