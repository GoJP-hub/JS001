import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthServiceService } from 'src/app/services/auth-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private authService: AuthServiceService
  ) { }

  ngOnInit(): void {
    const returnUrl = this.route.snapshot.queryParamMap.get('returnUrl');
    console.log("[Return URL]: " + returnUrl)
    if (this.authService.isLogin()){
      this.router.navigate([returnUrl || '/']);
    }
  }

}
