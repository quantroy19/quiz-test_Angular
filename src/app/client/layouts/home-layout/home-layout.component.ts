import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { subject } from './../../../models/subject';
import { SubjectService } from 'src/app/services/subject.service';
import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-home-layout',
  templateUrl: './home-layout.component.html',
  styleUrls: ['./home-layout.component.css'],
})
export class HomeLayoutComponent implements OnInit {
  textContent: any = '';
  subBySearch: any = '';
  constructor(
    private subjectService: SubjectService,
    private toastr: ToastrService,
    private router: Router,
    private userService: UserService
  ) {}

  ngOnInit(): void {}
  author = localStorage.getItem('login_user');
  // getSubjectBySearch() {
  //   this.subjectService
  //     .getListSubjectBySearch(this.textContent)
  //     .subscribe((data) => {
  //       console.log(data);
  //     });
  // }
  // logout() {
  //   localStorage.clear();
  //   setTimeout(() => {
  //     location.reload();
  //   }, 1000);
  // }
  logout(): void {
    // localStorage.removeItem('login_user');
    // this.toastr.success('Logout Successfully');

    this.userService.logout();
    window.location.reload();
  }
}
