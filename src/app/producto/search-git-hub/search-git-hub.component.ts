import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import { SearchGitHubService } from './search-git-hub.service';
@Component({
  selector: 'app-search-git-hub',
  templateUrl: './search-git-hub.component.html',
  styleUrls: ['./search-git-hub.component.css'],
  providers: [SearchGitHubService]
})
export class SearchGitHubComponent implements OnInit {

  searchControl = new FormControl;
  isLoading = true;
  users:any;
  constructor(private _searchgithubService: SearchGitHubService) {
  }
  ngOnInit() {
    this.searchControl.valueChanges
      .filter(text => text.length >= 3)
      .debounceTime(500)
      .distinctUntilChanged()
      .subscribe(
      value => {
        this.isLoading = true;
        this._searchgithubService.getGitHubData(value)
          .subscribe(data => {
          this.isLoading = false;
          this.users = data.items;
            //console.log(data.items);
          })});
  }
}
