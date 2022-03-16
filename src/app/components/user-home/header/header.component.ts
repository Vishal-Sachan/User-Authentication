import { Component, OnInit } from '@angular/core';
import { UserServiceService } from '../services/user-service.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(public userService: UserServiceService) { }



  logout() {
    localStorage.removeItem('token')
    localStorage.removeItem('currentUser')
  }

  ngOnInit(): void {
  }

}
