import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  constructor(
    private jwtHelper: JwtHelperService
  ) { }

  isLogin(){
    return !this.jwtHelper.isTokenExpired();
  }

  logout(){
    document.location.href = 'https://www.google.com/accounts/Logout?continue=https://appengine.google.com/_ah/logout?continue='
    + environment.homeUrl;
    localStorage.removeItem('access_token');
  }

  getUserToken(){
    const token = localStorage.getItem('access_token') || '';
    return this.jwtHelper.decodeToken(token);
  }
}
