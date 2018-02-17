import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BsJumbotronComponent } from './bs-jumbotron.component';

describe('BsJumbotronComponent', () => {
  let component: BsJumbotronComponent;
  let fixture: ComponentFixture<BsJumbotronComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BsJumbotronComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BsJumbotronComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
