import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  private currentUser = localStorage.getItem('currentUser')

  logout() {
    localStorage.removeItem('token')
    localStorage.removeItem('currentUser')
  }

  ngOnInit(): void {
  }

}
