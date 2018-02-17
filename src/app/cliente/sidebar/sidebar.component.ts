import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  
  menuItems: MenuItem[] = [
    {url:"cliente-lista",displayName: "Cartas"},
    {url:"cliente-tabla",displayName: "Tablas"}
  ]
  constructor() { }

  ngOnInit() {
  }

}
export class MenuItem {
  url: string;
  displayName: string;
}
