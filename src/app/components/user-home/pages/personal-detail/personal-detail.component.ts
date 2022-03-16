import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UserServiceService } from '../../services/user-service.service';

@Component({
  selector: 'app-personal-detail',
  templateUrl: './personal-detail.component.html',
  styleUrls: ['./personal-detail.component.css']
})
export class PersonalDetailComponent implements OnInit {

  counter(i: number) {
    return new Array(i);
  }

  public user: any

  constructor(private userService: UserServiceService) { }

  emailPattern = "^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$";
  emailPattern2 = '[a-z0-9]+[@]+[a-z]+[.]+[a-z]*';

  form = new FormGroup({
    firstName: new FormControl('', [
      Validators.required,
      Validators.pattern('[a-zA-Z]*')
    ]),
    lastName: new FormControl('', [
      Validators.pattern('[a-zA-Z]*'),
    ]),
    dob: new FormControl('', [
      Validators.required
    ]),
    age: new FormControl('', [
      Validators.required,
      Validators.pattern('[0-9]*')

    ]),
    phone: new FormControl('', [
      Validators.required,
      Validators.minLength(10),
      Validators.maxLength(10),
      Validators.pattern('[0-9]*')
    ]),
    gender: new FormControl('', [
      Validators.required
    ]),
    address: new FormControl('', [
      Validators.required,
      Validators.pattern('[a-zA-Z0-9 ]*')
    ]),
    email: new FormControl('', [
      Validators.required,
      Validators.pattern(this.emailPattern)
    ])
  })

  get firstName() {
    return this.form.get('firstName')
  }
  get lastName() {
    return this.form.get('lastName')
  }
  get address() {
    return this.form.get('address')
  }
  get dob() {
    return this.form.get('dob')
  }
  get phone() {
    return this.form.get('phone')
  }
  get email() {
    return this.form.get('email')
  }
  get age() {
    return this.form.get('age')
  }
  get gender() {
    return this.form.get('gender')
  }

  ngOnInit(): void {
    var email = this.userService.currentUser.email
    //console.log(email)
    this.userService.getUserPersonalDetail(email).subscribe(res => {
      this.user = res.data
      console.log(this.user)
    })
  }

}
