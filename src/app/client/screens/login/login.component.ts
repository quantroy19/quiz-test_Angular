import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';
import {
  FacebookLoginProvider,
  GoogleLoginProvider,
  SocialAuthService,
  SocialUser,
} from 'angularx-social-login';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  // loginForm!: FormGroup;
  socialUser!: SocialUser;
  isLoggedin?: boolean;
  loginForm = new FormGroup({
    email: new FormControl(),
    pass: new FormControl(),
  });
  infoAuthor: any = '';
  infoUserLoginSocal: any = {
    google_id: '',
    email: '',
    name: '',
    avatar: '',
    auth_token: '',
  };
  constructor(
    private userService: UserService,
    private router: Router,
    private toastr: ToastrService,
    private formBuilder: FormBuilder,
    private socialAuthService: SocialAuthService
  ) {}
  submitFormLogin() {
    this.userService.checkLogin().subscribe((data) => {
      const user = data.find((item: any) => {
        this.infoAuthor = item;
        return (
          item.email === this.loginForm.value.email &&
          item.password === this.loginForm.value.pass
        );
      });
      if (user) {
        this.router.navigate(['']);

        localStorage.setItem('authorId', this.infoAuthor.id);
        localStorage.setItem('authorName', this.infoAuthor.username);
        localStorage.setItem('authorEmail', this.infoAuthor.email);
        this.toastr.success('Login successfully!');
      } else {
        this.toastr.error('Login false!');
      }
      // environment.author = null;
    });
  }
  ngOnInit(): void {
    this.socialAuthService.authState.subscribe((user) => {
      this.socialUser = user;
      this.isLoggedin = user != null;
      this.infoUserLoginSocal = {
        social_id: this.socialUser.id,
        email: this.socialUser.email,
        fullname: this.socialUser.name,
        avatar: this.socialUser.photoUrl,
        auth_token: this.socialUser.authToken,
      };
      // console.log(this.infoUserLoginSocal);

      this.userService
        .checkLoginWithSocial(this.socialUser.email, this.socialUser.id)
        .subscribe((data) => {
          // console.log(data);

          if (!data) {
            this.userService
              .loginWithSocial(this.infoUserLoginSocal)
              .subscribe((data) => {
                localStorage.setItem('login_user', JSON.stringify(data));
                console.log(data);
              });
          } else {
            console.log(`fales`, data);
            console.log('user da tung dd nhap');
          }
          // window.location.href = '/';
          this.router.navigate(['/']);
        });

      // this.router.navigate(['']);
    });
  }
  loginWithGoogle(): void {
    this.socialAuthService.signIn(GoogleLoginProvider.PROVIDER_ID);
  }
  facebookSignin(): void {
    this.socialAuthService.signIn(FacebookLoginProvider.PROVIDER_ID);
  }
}
