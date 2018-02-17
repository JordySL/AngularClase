import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  @Input('appHighlight') highlightColor : string;

  constructor(private el: ElementRef) {
    //el.nativeElement.style.backgroundColor = 'yellow';
  }

  @HostListener('mouseenter') onmouseenter() {
    this.highlight(this.highlightColor);
  }
  @HostListener('mouseleave') onmouseleave() {
    this.highlight(null);
  }

  private highlight(color: string) {
    this.el.nativeElement.style.backgroundColor = color;
  }
}
