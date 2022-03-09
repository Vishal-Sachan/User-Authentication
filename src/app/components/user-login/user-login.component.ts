import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router, RouterModule, Routes } from '@angular/router'
import { AuthenticateService } from 'src/app/services/authenticate.service';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {

  constructor(public authService: AuthenticateService, private router: Router) { }

  emailPattern = "^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$";
  tokenPattern = "^([a-zA-Z0-9_=]+)\.([a-zA-Z0-9_=]+)\.([a-zA-Z0-9_\-\+\/=]*)"

  form = new FormGroup({
    email: new FormControl('', [
      Validators.required,
      Validators.pattern(this.emailPattern)
    ]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(8)
    ]),
  })

  formToken = new FormGroup({
    token: new FormControl('', [
      Validators.required,
    ])
  })

  get email() {
    return this.form.get('email')
  }
  get password() {
    return this.form.get('password')
  }

  login(data: any) {
    data.token = localStorage.getItem("token")
    this.authService.login(data).subscribe(res => {
      if (res.sucess) {
        return this.router.navigate(['/home/view'])
      }
      return alert(res.message)
    })
  }
  ngOnInit(): void {
  }

}
