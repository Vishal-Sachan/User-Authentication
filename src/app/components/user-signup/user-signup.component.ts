import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthenticateService } from 'src/app/services/authenticate.service';

@Component({
  selector: 'app-user-signup',
  templateUrl: './user-signup.component.html',
  styleUrls: ['./user-signup.component.css']
})
export class UserSignupComponent implements OnInit {

  constructor(public authService: AuthenticateService) { }

  emailPattern = "^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$";

  form = new FormGroup({
    userName: new FormControl('', [
      Validators.required,
      Validators.pattern('[a-zA-Z0-9]*')
    ]),
    contact: new FormControl('', [
      Validators.required,
      Validators.minLength(10),
      Validators.pattern('[0-9]*')
    ]),
    email: new FormControl('', [
      Validators.required,
      Validators.pattern(this.emailPattern)
    ]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(8)
    ]),
    checkbox: new FormControl('', [
      Validators.required
    ])
  })

  get userName() {
    return this.form.get('userName')
  }
  get contact() {
    return this.form.get('contact')
  }
  get email() {
    return this.form.get('email')
  }
  get password() {
    return this.form.get('password')
  }

  signupUser(data: any) {
    this.authService.signup(data).subscribe(res => {
      localStorage.setItem('currentUser', JSON.stringify(res))
      localStorage.setItem('token', res.token)
      alert(res.message)
    })
  }

  ngOnInit(): void {
  }

}
