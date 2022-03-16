import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  constructor(private http: HttpClient) { }

  private baseUrl = environment.baseUrl
  public currentUser = JSON.parse(localStorage.getItem('currentUser'))

  getUserPersonalDetail(email: any) {
    // console.log(email)
    return this.http.post<any>(`${this.baseUrl}/user/detail/view`, email)
  }

}
