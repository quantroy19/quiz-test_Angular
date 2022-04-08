import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { Observable } from 'rxjs';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root',
})
export class AuthAdminGuard implements CanActivate {
  constructor(private router: Router, private toastr: ToastrService) {}

  canActivate(): boolean {
    const loggedInUser = JSON.parse(localStorage.getItem('login_user') || '{}');
    let rolesUser: any = loggedInUser.roles;
    for (let i = 0; i < rolesUser.length; i++) {
      if (rolesUser[i].name === 'admin') {
        return true;
      }
    }

    this.toastr.warning('You do not have access');
    this.router.navigate(['']);
    return false;
  }
}
