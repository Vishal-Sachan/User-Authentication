import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { environment } from 'src/environments/environment';
import * as CryptoJS from 'crypto-js'

@Injectable({
  providedIn: 'root'
})
export class AuthenticateService {

  private baseUrl = environment.baseUrl;

  constructor(private http: HttpClient) { }

  // encryptPassword(password: string): string {
  //   return CryptoJS.AES.encrypt(password, this.SECRET_KEY).toString()
  // }
  // decryptPassword(password: string) {
  //   return CryptoJS.AES.decrypt(password, this.SECRET_KEY)
  // }

  validateToken(token: string) {
    return this.http.post<any>(`${this.baseUrl}/verify`, token)
  }

  login(data: any) {
    return this.http.post<any>(`${this.baseUrl}/login`, data)
  }

  signup(data: any) {
    return this.http.post<any>(`${this.baseUrl}/register`, data)
  }
}
