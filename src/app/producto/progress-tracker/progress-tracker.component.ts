import { Component, OnInit, ViewChild, ElementRef, AfterViewChecked, ChangeDetectorRef } from '@angular/core';

import { ProductoService } from './../producto-lista/producto.service';
import { Producto } from './../models/producto';

@Component({
  selector: 'app-progress-tracker',
  templateUrl: './progress-tracker.component.html',
  styleUrls: ['./progress-tracker.component.css']
})
export class ProgressTrackerComponent implements OnInit, AfterViewChecked {

  items: Producto[] = [];
  
  @ViewChild("progressTracker") private documentSection: ElementRef;
  contentWidth: number = 0;

  constructor(private _productoService: ProductoService,
    private _ref: ChangeDetectorRef) { }

  ngOnInit() {
    this.getProductoList();
  }
  
  ngAfterViewChecked(): void {
    if (this.documentSection) {
      if (this.contentWidth === 0 
        || this.contentWidth !== this.documentSection.nativeElement.offsetWidth) {
        this.contentWidth = this.documentSection.nativeElement.offsetWidth;
        this._ref.detectChanges();
      }
    }
  }

  getProductoList() {
    this._productoService.getProductos(1, 1000)
      .subscribe((response: Producto[]) => {
        this.items = response;
      });
  }

}