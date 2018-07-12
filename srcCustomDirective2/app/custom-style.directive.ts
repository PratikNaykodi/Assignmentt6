import { Directive,ElementRef } from '@angular/core';

@Directive({
  selector: '[appCustomStyle]'
})
export class CustomStyleDirective {

  constructor(ele:ElementRef) {
      ele.nativeElement.style.background='yellow';
      ele.nativeElement.style.bold;
      //console.log("xyz");
    }

}
