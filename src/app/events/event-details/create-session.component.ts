import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ISession } from '../shared/event.model';
import { restrictedWords } from '../shared/restricted-words.validator';

@Component({
  templateUrl: 'create-session.component.html',
  styles: [`
  em { float: right; color: #E05C65; padding-left: 10px; }
  .error input, .error select, .error textarea { background-color: #E3C3C5; }
  .error ::placeholder { color: #999; }
  `]
})
export class CreateSessionComponent implements OnInit {
  name: FormControl;
  presenter: FormControl;
  duration: FormControl;
  level: FormControl;
  abstract: FormControl;
  newSessionForm: FormGroup;

  constructor() { }

  ngOnInit() {
    this.name = new FormControl('', Validators.required);
    this.presenter = new FormControl('', Validators.required);
    this.duration = new FormControl('', Validators.required);
    this.level = new FormControl('', Validators.required);
    this.abstract = new FormControl('', [Validators.required, Validators.maxLength(400), restrictedWords(['kurwa', 'chuj'])]);

    this.newSessionForm = new FormGroup({
      name: this.name,
      presenter: this.presenter,
      duration: this.duration,
      level: this.level,
      abstract: this.abstract
    });
  }

  saveSession(values): void {
    const worker = new Date();
    const session: ISession = {
      id: +(+worker.getTime()).toString().slice(-3),
      name: values.name,
      duration: +values.duration,
      level: values.level,
      presenter: values.presenter,
      abstract: values.abstract,
      voters: []
    };
    console.log(session);
  }

}
