import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpHeaders
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class TokenInterceptorInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const accessToken = localStorage.getItem("token");
    const headers = new HttpHeaders({
      'Access-Control-Allow-Origin':'*',
      'Access-Control-Allow-Methods': '*',
      'Authorization' : 'bearer '+ accessToken
    })
    request = request.clone({ headers : headers});
    return next.handle(request);
  }
}
