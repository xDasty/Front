import { Directive, ElementRef } from '@angular/core';


//Directiva para que al cargar la pag pille el input NFC el focus

@Directive({
  selector: '[autoFocus]'
})
export class AutoFocusDirective {
  constructor(private el: ElementRef) {}

  ngAfterViewInit() {
    this.el.nativeElement.focus();
  }
}
