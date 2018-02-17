import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  menuItems: MenuItem[] = [
    { displayName: "Cards", url: "productoCards" },
    { displayName: "Lista", url: "productoTabla" },
    { displayName: "Ng Content", url: "productoContent" },
    { displayName: "User Form", url: "userForm" },
    { displayName: "Login", url: "login" },
    { displayName: "Search", url: "searchGitHub" },
    { displayName: "Progress", url: "progress" }
  ];
  constructor() { }

  ngOnInit() {
  }

}
export class MenuItem {
  displayName: string;
  url: string;
}
