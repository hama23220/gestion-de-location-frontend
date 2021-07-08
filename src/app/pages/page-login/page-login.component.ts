import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { TokenStorageService } from 'src/app/services/interceptor/token-storage.service';
import { AuthService } from 'src/app/services/login/auth.service';


@Component({
  selector: 'app-page-login',
  templateUrl: './page-login.component.html',
  styleUrls: ['./page-login.component.css']
})


export class PageLoginComponent implements OnInit {

  public form: FormGroup;
  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage = "";
  
  constructor(private authService: AuthService,
    private tokenStorage: TokenStorageService,
    private router: Router) { }

  ngOnInit(): void {
    this.form = new FormGroup({
      login: new FormControl("", [Validators.required]),
      password: new FormControl("", [Validators.required]),
    });
  }
  signin() {
    if (this.form.valid) {
      console.log(this.form.value);
      
      this.authService.login(this.form.value).subscribe(
        (data) => {
          this.tokenStorage.saveToken(data.accessToken);
          this.tokenStorage.saveUser(data);

          this.isLoginFailed = false;
          this.isLoggedIn = true;
          //  window.location.replace("/dashboard");
          //  this.router.navigate(['/dashboard'])
          this.router.navigate(["/statistiques"]).then();
          this.authService.filter("login");
          // this.roles = this.tokenStorage.getUser().roles;
        },
        (err) => {
          this.errorMessage = err.error.message;
          this.isLoginFailed = true;
        }
      );
    }
  }

}
