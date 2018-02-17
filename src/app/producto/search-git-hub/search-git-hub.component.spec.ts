import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchGitHubComponent } from './search-git-hub.component';

describe('SearchGitHubComponent', () => {
  let component: SearchGitHubComponent;
  let fixture: ComponentFixture<SearchGitHubComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchGitHubComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchGitHubComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
