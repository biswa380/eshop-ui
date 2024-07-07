import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
import { TokenRequest } from '../interface/token-request';

const BASE_URL = ["http://localhost:8090"];
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http : HttpClient) { }

  getToken(tokenRequest : TokenRequest) : Observable<any> {
    const headers = new HttpHeaders({
      'Access-Control-Allow-Origin':'*'
    })
    return this.http.post(BASE_URL+"/getToken", tokenRequest, {headers : headers});
  }
  
}
