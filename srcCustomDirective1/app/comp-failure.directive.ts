import { Directive, HostListener, ElementRef } from '@angular/core';

@Directive({
  selector: '[appCompFailure]'
})
export class CompFailureDirective {

  constructor(private ele:ElementRef) { }

 
@HostListener('mouseenter') onMouseEnter() {
  this.fun('red');
}

  private fun(color: string) {
    this.ele.nativeElement.style.backgroundColor = color;
  
    }
  

}
