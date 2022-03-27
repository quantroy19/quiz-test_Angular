import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  loginForm = new FormGroup({
    email: new FormControl(),
    pass: new FormControl(),
  });
  infoAuthor: any = '';
  constructor(
    private userService: UserService,
    private router: Router,
    private toastr: ToastrService
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
    // localStorage.clear();
  }
}
