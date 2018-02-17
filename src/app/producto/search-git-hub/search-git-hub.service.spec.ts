import { TestBed, inject } from '@angular/core/testing';

import { SearchGitHubService } from './search-git-hub.service';

describe('SearchGitHubService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SearchGitHubService]
    });
  });

  it('should be created', inject([SearchGitHubService], (service: SearchGitHubService) => {
    expect(service).toBeTruthy();
  }));
});
