import { ToastrService } from 'ngx-toastr';
import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { StudentService } from 'src/app/services/admin/student.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-student-edit-form',
  templateUrl: './student-edit-form.component.html',
  styleUrls: ['./student-edit-form.component.css'],
})
export class StudentEditFormComponent implements OnInit {
  constructor(
    private studentService: StudentService,
    private activateRouter: ActivatedRoute,
    private toastr: ToastrService
  ) {}
  @Input('dataStudent') dataStudent: any;
  studentId: number = 0;

  studentForm = new FormGroup({
    id: new FormControl(),
    username: new FormControl(),
    password: new FormControl(),
    fullname: new FormControl(),
    gender: new FormControl('true'),
    email: new FormControl(''),
    schoolfee: new FormControl(),
    birthday: new FormControl(),
    // avatar: new FormControl('3'),
  });

  ngOnInit(): void {
    this.studentId = Number(this.activateRouter.snapshot.paramMap.get('id'));
    this.studentService.getStudentById(this.studentId).subscribe((data) => {
      console.log(data);
      this.studentForm.setValue(data);
    });
  }
  saveEditStudent() {
    this.studentService
      .saveEditStudent(this.studentForm.value, this.studentId)
      .subscribe((data) => {
        this.toastr.success('Edit Student Successfull!');
      });
  }
}
