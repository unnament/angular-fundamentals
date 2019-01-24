import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IEvent } from './shared/event.model';
import { EventService } from './shared/event.service';

@Component({
  templateUrl: 'create-event.component.html',
  styles: [`
    em { float: right; color: #E05C65; padding-left: 10px; }
    .error input { background-color: #E3C3C5; }
    .error ::placeholder { color: #999; }
  `]
})
export class CreateEventComponent implements OnInit {
  newEvent;
  isDirty = true;

  constructor(private router: Router, private eventService: EventService) { }

  ngOnInit() { }

  cancel() {
    this.router.navigate(['/events']);
  }

  saveEvent(formValues) {
    console.log(formValues);
    const worker = new Date();
    const event: IEvent = {
      id: +(+worker.getTime()).toString().slice(-3),
      name: formValues.name,
      date: formValues.date,
      time: formValues.time,
      price: formValues.price,
      imageUrl: formValues.imageUrl,
      location: formValues.location,
      onlineUrl: formValues.onlineUrl,
      sessions: []
    };
    this.eventService.saveEvent(event);
    this.isDirty = false;
    this.router.navigate(['/events']);
  }
}
