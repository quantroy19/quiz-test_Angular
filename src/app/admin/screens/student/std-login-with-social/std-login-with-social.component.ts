import { StudentService } from 'src/app/services/admin/student.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-std-login-with-social',
  templateUrl: './std-login-with-social.component.html',
  styleUrls: ['./std-login-with-social.component.css'],
})
export class StdLoginWithSocialComponent implements OnInit {
  constructor(private studentServive: StudentService) {}
  listStdLoginSocial: any = '';
  ngOnInit(): void {
    this.getStudentLoginWithSocial();
  }
  getStudentLoginWithSocial() {
    this.studentServive.getAllStudent().subscribe((data) => {
      this.listStdLoginSocial = data.filter((item: any) => 'social_id' in item);
      console.log(this.listStdLoginSocial);
    });
  }
  editStudent(a: null): void {}
  confirmRemove(a: null, e: null) {}
  saveAddFormStudent(a: null) {}
}
