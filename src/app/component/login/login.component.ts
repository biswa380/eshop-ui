import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { TokenRequest } from 'src/app/interface/token-request';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  authCode : string = "";
  authUrl : string = "http://localhost:9000/oauth2/authorize?client_id=web-client&scope=openid&response_type=code&prompt=consent&code_challenge=-Kwgb8JtfyVVGR8C8f90wc--AbUrsvzmkaz5zBbiE4w&code_challenge_method=S256&redirect_uri=http://localhost:4200/login";
  tokenRequest = {} as TokenRequest;
  constructor(private _activatedRoute: ActivatedRoute, 
    private _router:Router, 
    private authService:AuthService
  ) {
    _activatedRoute.queryParams.subscribe(
      params => this.authCode = params['code']);
      window.localStorage.setItem("authCode", this.authCode);

      this.tokenRequest = {
        code : this.authCode, 
        grant_type : "authorization_code", 
        client_id : "web-client", 
        redirect_uri : "http://localhost:4200/login", 
        code_verifier : "2cPqQa36cexp_n-N7cra3QXrrm5jtmml8Cye4oplDI1Lwa_z6VwPz3w3zgDVZ0bXpU1RkTHhrISaeAqV1aL1vjB6W_LpsnJ-a3ljMMFqpsluZBixyHNM9MjX0pwvYAix"
      }
      
      this.authService.getToken(this.tokenRequest).subscribe(
        res => {
          window.localStorage.setItem("token", res.access_token)
          this._router.navigate(['/category']);
        }
      );
      
   }

  ngOnInit(): void {
    
  }

}
