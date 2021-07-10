import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {
  constructor() {}

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    console.log('inside JWT token interceptor');
    const token = localStorage.getItem('token');

    // const skipRoute = ['login', 'register'];

    // const found = skipRoute.find((v) => v.includes(str));

    // if (request.url.includes(skipRoute)) {
    //   return next.handle(request);
    // }

    if (token != null) {
      request = request.clone({
        headers: request.headers.set('authorization', token),
      });
    }

    return next.handle(request);
  }
}
