import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appThumbnail]'
})
export class ThumbnailDirective {

  constructor(private el: ElementRef) { 
    this.iconScale("24px")
  }
  
  @HostListener('mouseenter') onMouseEnter(){
    this.iconScale("32px");
  }
  @HostListener('mouseleave') onMouseLeave(){
    this.iconScale("24px");
  }

  private iconScale(size: string){
    this.el.nativeElement.style.width = size;
    this.el.nativeElement.style.height = size;
  }

}
