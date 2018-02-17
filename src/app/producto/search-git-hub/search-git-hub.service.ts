import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class SearchGitHubService {

  constructor(private _http: Http) { }

  getGitHubData(_searchTerm: string) {
    return this._http.get('https://api.github.com/search/users?q=' + _searchTerm)
      .map(res => res.json());
  }
}
