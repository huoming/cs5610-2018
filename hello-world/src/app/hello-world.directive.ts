import { Directive, ElementRef, Input, HostListener } from '@angular/core';


@Directive({
  selector: '[appHelloWorld]'
})
export class HelloWorldDirective {

  constructor(private el: ElementRef) { }
  @Input() backgroundColor: string;

  @HostListener('click') onClick() {
    console.log("click me!");
    this.paintColor(this.backgroundColor);
  }

  private  paintColor(color: string) {
    console.log( "paint: " + color);
    this.el.nativeElement.style.background = color;
  }
}
