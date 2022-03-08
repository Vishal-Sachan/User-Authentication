import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { environment } from 'src/environments/environment';
import { ILoginResponse } from 'src/assets/response';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthenticateService {

  public baseUrl = environment.baseUrl;

  // public response: {
  //   message: string,
  //   token: string
  // }
  public token: any
  // public token: any
  // public message: string
  //public response: ILoginResponse

  constructor(private http: HttpClient) { }

  login(data: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/login`, data, { responseType: 'text' })
  }

  signup(data: any) {
    this.http.post(`${this.baseUrl}/register`, data, { responseType: 'text' }).subscribe(res => {
      console.log(res)
    })
  }

}
