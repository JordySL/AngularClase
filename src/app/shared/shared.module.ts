import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { PaginationComponent } from './pagination/pagination.component';
import { MatPaginatorModule, MatIconModule } from '@angular/material';
import { RouterModule } from '@angular/router';
import { NotFoundPageComponent } from './not-found-page/not-found-page.component';
import { TableViewComponent } from './table-view/table-view.component';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { CarouselComponent, CarouselItemElement } from './carousel/carousel.component';
import { CarouselItemDirective } from './carousel-item.directive';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ProgressItemComponent } from './progress-item/progress-item.component';

@NgModule({
  imports: [
    CommonModule,
    MatPaginatorModule, MatIconModule,
    RouterModule,
    NgxDatatableModule,
    FlexLayoutModule
  ],
  declarations: [NavBarComponent, PaginationComponent, NotFoundPageComponent,
    TableViewComponent, CarouselComponent, CarouselItemDirective, ProgressItemComponent,
    CarouselItemElement],
  exports: [NavBarComponent, PaginationComponent, NotFoundPageComponent,
    TableViewComponent, CarouselComponent, CarouselItemDirective, ProgressItemComponent,
    CarouselItemElement]
})
export class SharedModule { }