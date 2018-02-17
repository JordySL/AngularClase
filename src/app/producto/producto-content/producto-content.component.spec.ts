import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductoContentComponent } from './producto-content.component';

describe('ProductoContentComponent', () => {
  let component: ProductoContentComponent;
  let fixture: ComponentFixture<ProductoContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductoContentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductoContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
