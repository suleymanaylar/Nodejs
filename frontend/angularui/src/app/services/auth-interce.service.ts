import { Injectable, Injector } from '@angular/core';
import { HttpInterceptor } from '@angular/common/http';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthInterceService implements HttpInterceptor {

  constructor(private injector: Injector) { }
  intercept(request, next) {
    var authService = this.injector.get(AuthService)

    if (authService.isAuthenticated) {
      var authrequest = request.clone({
        headers: request.headers.set('authorization', 'token ' + authService.token)
      })

      return next.handle(authrequest)
    }
    else{
      return next.handle(request)
    }

  }
}
