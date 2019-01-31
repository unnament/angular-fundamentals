import { Directive, OnInit, Inject, ElementRef, Input } from '@angular/core';
import { JQ_TOKEN } from './jQuery.service';

@Directive({ selector: '[modal-trigger]' })
export class ModalTriggerDirective implements OnInit {
  @Input('modal-trigger') elementId: string;
  private el: HTMLElement;

  constructor(private ref: ElementRef, @Inject(JQ_TOKEN) private $: any) {
    this.el = ref.nativeElement;
  }

  ngOnInit() {
    this.el.addEventListener('click', this.startModal.bind(this), false);
  }

  startModal(): any {
    this.$(`#${this.elementId}`).modal({});
  }
}

