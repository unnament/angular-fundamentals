import { Component, OnInit } from '@angular/core';
import { EventService } from './shared/event.service';
import { ToastrService } from '../shared/toastr.service';

@Component({
  templateUrl: './events-list.component.html'
})
export class EventsListComponent implements OnInit {
  events: Array<any>;

  constructor(private eventService: EventService, private toastrService: ToastrService) {}

  ngOnInit() {
    this.events = this.eventService.getEvents();
  }

  handleThumbnailClick(eventName: string): void {
    this.toastrService.success(eventName, 'tytułem wstępu');
  }
}
