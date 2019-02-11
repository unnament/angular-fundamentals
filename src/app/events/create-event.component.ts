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
    this.eventService.saveEvent(formValues).subscribe(() => {
      this.isDirty = false;
      this.router.navigate(['/events']);
    });
  }
}
