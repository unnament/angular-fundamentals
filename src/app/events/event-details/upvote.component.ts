import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';
import { preserveWhitespacesDefault } from '@angular/compiler';

@Component({
// tslint:disable-next-line: component-selector
  selector: 'upvote',
  template: `
    <div class="votingWidgetContainer pointable" (click)="onClick()">
      <div class="well votingWidget">
        <div class="votingButton">
          <i class="glyphicon glyphicon-heart" [style.color]="iconColor"></i>
        </div>
        <div class="badge badge-inverse votingCount">
          <div>{{ count }}</div>
        </div>
      </div>
    </div>
  `,
  styleUrls: ['./upvote.component.css']
})

export class UpvoteComponent implements OnInit {
  @Input() count: number;
  @Input() set voted(val: boolean) {
    this.iconColor = val ? 'red' : 'white';
  }
  @Output() vote = new EventEmitter();
  iconColor: string;

  constructor() { }

  ngOnInit() { }

  onClick() {
    this.vote.emit({});
  }
}
