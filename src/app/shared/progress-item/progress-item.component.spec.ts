import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgressItemComponent } from './progress-item.component';

describe('ProgressItemComponent', () => {
  let component: ProgressItemComponent;
  let fixture: ComponentFixture<ProgressItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProgressItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProgressItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
