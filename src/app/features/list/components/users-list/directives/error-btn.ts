import { Directive, ElementRef, inject, OnInit } from '@angular/core';

@Directive({
  selector: '[appErrorBtn]',
})
export class ErrorBtn implements OnInit {
  public hostEl = inject(ElementRef).nativeElement as HTMLElement;

  public ngOnInit() {
    this.hostEl.classList.add('error-button');
  }
}
