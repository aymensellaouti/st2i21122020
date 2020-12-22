import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appRainbow]'
})
export class RainbowDirective {

  @HostBinding('style.color') color;
  @HostBinding('style.borderColor') bc;
  constructor() { }
  @HostListener('keyup') onKeyUp() {
    this.bc = this.color = this.getRandomColor();
  }

  getRandomColor(): string {
    return '#' + Math.floor(Math.random() * 16777215).toString(16);
  }
}
