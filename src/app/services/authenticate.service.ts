import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class AuthenticateService {

  constructor(private http: HttpClient) { }

  loginNormal(data: any) {
    this.http.post('', data, { responseType: "text" })
  }
  loginToken(data: any) { }
}
