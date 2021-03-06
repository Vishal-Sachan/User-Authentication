import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { userDetail } from 'src/assets/user-personal-detail';
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

  changeClass1 = 'hidden'
  changeClass2 = 'not-hidden'

  changeProperty() {
    this.changeClass1 = 'not-hidden'
    this.changeClass2 = 'hidden'
  }

  changeProperty2() {
    this.changeClass1 = 'hidden'
    this.changeClass2 = 'not-hidden'
  }

  public user: userDetail

  constructor(private userService: UserServiceService) { }

  emailPattern = "^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$";

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
    maritalStatus: new FormControl('', [
      Validators.required
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
  get maritalStatus() {
    return this.form.get('maritalStatus')
  }
  get age() {
    return this.form.get('age')
  }
  get gender() {
    return this.form.get('gender')
  }

  ngOnInit(): void {
    var email = this.userService.currentUser.email
    // this.fetch(email)
    this.userService.getUserPersonalDetail(email).subscribe(res => {
      if (res.data) {
        this.user = res.data
        // console.log(this.user)
      }
    })
  }
}
