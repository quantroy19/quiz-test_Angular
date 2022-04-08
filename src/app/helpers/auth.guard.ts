import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { Observable } from 'rxjs';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private router: Router, private toastr: ToastrService) {}
  canActivate(): boolean {
    const loggedInUser = JSON.parse(localStorage.getItem('login_user') || '{}');
    if (
      loggedInUser.email == undefined ||
      loggedInUser.email == '' ||
      loggedInUser.social_id == undefined ||
      loggedInUser.social_id == ''
    ) {
      this.toastr.warning('Please login!');
      setTimeout(() => {
        this.router.navigate(['/login']);
      }, 1500);
      return false;
    }
    return true;
  }
}
