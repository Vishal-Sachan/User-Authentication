import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { environment } from 'src/environments/environment';
import { ILoginResponse } from 'src/assets/response';
import { Observable } from 'rxjs';
import { Message } from '@angular/compiler/src/i18n/i18n_ast';

@Injectable({
  providedIn: 'root'
})
export class AuthenticateService {

  public baseUrl = environment.baseUrl;

  private response: string
  private token: string

  constructor(private http: HttpClient) { }

  // login(data: any) {
  //   this.http.post<{ message: string, token: string }>(`${this.baseUrl}/login`, data).subscribe(res => {
  //     console.log(res)
  //   })
  // }

  login(data: any) {
    return this.http.post<any>(`${this.baseUrl}/login`, data)
  }

  signup(data: any) {
    return this.http.post<any>(`${this.baseUrl}/register`, data)
  }
  // signup(data: any) {
  //   this.http.post<{ message: string, token: string }>(`${this.baseUrl}/register`, data).subscribe(res => {
  //     localStorage.setItem("token", res.token)
  //   })
  // }

}
