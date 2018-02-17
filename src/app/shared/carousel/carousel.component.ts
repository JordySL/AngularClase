import {
  Component, OnInit, Input, ContentChildren, QueryList,
  Directive, ViewChildren, ElementRef, OnChanges, SimpleChanges, ViewChild
} from '@angular/core';
import { CarouselItemDirective } from './../carousel-item.directive';
import { AnimationBuilder, animate, style, AnimationFactory, AnimationPlayer } from '@angular/animations';

@Directive({
  selector: '.carousel-item'
})
export class CarouselItemElement { }

@Component({
  selector: 'carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit, OnChanges {

  @ContentChildren(CarouselItemDirective) items: QueryList<CarouselItemDirective>;
  @ViewChildren(CarouselItemElement, { read: ElementRef }) private itemsElement: QueryList<ElementRef>;
  @ViewChild("carousel") private carousel: ElementRef;
  @Input() timing = '250ms ease-in';
  @Input() showcontrols = false;
  @Input() contentWidth = 0;

  leftActionButtonVisible = true;
  rightActionButtonVisible = true;
  private itemWidth: number;
  carouselWrapperStyle = {};
  visibleItems = 1;
  currentSlide = 0;

  constructor(private builder: AnimationBuilder) { }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.contentWidth &&
      changes.contentWidth.currentValue !== 0) {
      this.leftActionButtonVisible = false;
      if (this.items.length <= this.visibleItems) {
        this.rightActionButtonVisible = false;
      }
      this.itemWidth = this.itemsElement.first.nativeElement.getBoundingClientRect().width;
      this.visibleItems = Math.floor((this.contentWidth - 80) / this.itemWidth);
      this.visibleItems = this.visibleItems === 0 ? 1 : this.visibleItems;
      this.carouselWrapperStyle = { width: `${this.itemWidth * this.visibleItems}px` }
    }
  }


  next() {
    if (this.currentSlide + this.visibleItems === this.items.length) return;
    this.leftActionButtonVisible = true;
    this.currentSlide = (this.currentSlide + 1) % this.items.length;
    const offset = this.currentSlide * this.itemWidth;
    const MyAnimation: AnimationFactory = this.buildAnimation(offset);
    const player: AnimationPlayer = MyAnimation.create(this.carousel.nativeElement);
    player.play();
    if (this.currentSlide + this.visibleItems === this.items.length) this.rightActionButtonVisible = false;
  }
  preview() {
    this.currentSlide = (this.currentSlide - 1) % this.items.length;
    const offset = this.currentSlide * this.itemWidth;
    const MyAnimation: AnimationFactory = this.buildAnimation(offset);
    const player: AnimationPlayer = MyAnimation.create(this.carousel.nativeElement);
    player.play();
    if (this.currentSlide + this.visibleItems === this.items.length) return;
    this.rightActionButtonVisible = true;
    if (this.currentSlide == 0 ) this.leftActionButtonVisible = false;
  }

  ngOnInit() {
  }

  private buildAnimation(offset) {
    return this.builder.build([
      animate(this.timing, style({ transform: `translateX(-${offset}px)` }))
    ]);
  }

}