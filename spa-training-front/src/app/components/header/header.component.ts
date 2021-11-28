import { Component, OnInit } from '@angular/core';
import { AuthServiceService } from 'src/app/services/auth-service.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  isLogin:boolean = false;
  userName: string = "";
  pictureUrl: string = ""; 

  constructor(
    private authService: AuthServiceService
  ) { }

  ngOnInit(): void {
    this.loginCheck();
  }

  loginCheck(){
    this.isLogin = this.authService.isLogin();
    console.log('[login status]: ' + this.isLogin);
    if(this.isLogin){
      const userToken = this.authService.getUserToken();
      this.userName = userToken.name;
      this.pictureUrl = userToken.picture;
    }
  }

  logout(){
    this.authService.logout();
  }

}
