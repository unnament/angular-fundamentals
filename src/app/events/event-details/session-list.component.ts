import { Component, OnInit, Input } from '@angular/core';
import { ISession } from '../shared/event.model';

@Component({
  selector: 'session-list',
  templateUrl: 'session-list.component.html'
})
export class SessionListComponent implements OnInit {
  @Input() sessions: ISession[];

  constructor() { }

  ngOnInit() { }
}
