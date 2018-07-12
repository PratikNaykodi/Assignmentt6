import { Directive, ElementRef ,HostListener} from '@angular/core';

@Directive({
  selector: '[appCompSuccess]'
})
export class CompSuccessDirective {

  constructor(private ele:ElementRef) {
      //console.log("xyz");
  
  }
@HostListener('mouseenter') onMouseEnter() {
  this.fun('green');
}

@HostListener('mouseleave') onMouseLeave() {
  this.fun('black');
}
private fun(color: string) {
  this.ele.nativeElement.style.backgroundColor = color;

  }
}
