import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-layout',
  templateUrl: './admin-layout.component.html',
  styleUrls: ['./admin-layout.component.css'],
})
export class AdminLayoutComponent implements OnInit {
  constructor(private userService: UserService, private router: Router) {}

  ngOnInit(): void {}
  // logout() {
  //   this.userService.logout();
  //   this.router.navigate(['']);
  // }
}
