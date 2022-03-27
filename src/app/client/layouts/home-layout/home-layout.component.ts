import { ToastrService } from 'ngx-toastr';
import { subject } from './../../../models/subject';
import { SubjectService } from 'src/app/services/subject.service';
import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';

@Component({
  selector: 'app-home-layout',
  templateUrl: './home-layout.component.html',
  styleUrls: ['./home-layout.component.css'],
})
export class HomeLayoutComponent implements OnInit {
  textContent: any = '';
  subBySearch: any = '';
  authorName = localStorage.getItem('authorName');
  constructor(
    private subjectService: SubjectService,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {}
  getSubjectBySearch() {
    this.subjectService
      .getListSubjectBySearch(this.textContent)
      .subscribe((data) => {
        console.log(data);
      });
  }
  logout() {
    this.toastr.success('Logout Successfully');
    localStorage.clear();
    setTimeout(() => {
      location.reload();
    }, 1000);
  }
}
