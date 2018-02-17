import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClienteContainerComponent } from './cliente-container.component';

describe('ClienteContainerComponent', () => {
  let component: ClienteContainerComponent;
  let fixture: ComponentFixture<ClienteContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClienteContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClienteContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
