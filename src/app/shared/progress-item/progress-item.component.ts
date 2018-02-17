import { Component, OnInit, Input } from '@angular/core';
import { Producto } from './../../producto/models/producto';

@Component({
  selector: 'app-progress-item',
  templateUrl: './progress-item.component.html',
  styleUrls: ['./progress-item.component.css']
})
export class ProgressItemComponent implements OnInit {

  @Input() item: Producto;
  constructor() { }

  ngOnInit() {
  }

}
