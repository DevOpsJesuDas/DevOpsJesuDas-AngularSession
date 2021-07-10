import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class LogInterceptor implements HttpInterceptor {
  constructor() {}

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    // Start time
    // Request
    // Response
    // End time
    const startDateTime = new Date();
    console.log('Request Start Time:: ' + startDateTime);

    const endtDateTime = new Date();
    console.log('Request End Time:: ' + endtDateTime);
    return next.handle(request);
  }
}
