import { EventEmitter, Component, OnInit, Output } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-student-add-form',
  templateUrl: './student-add-form.component.html',
  styleUrls: ['./student-add-form.component.css'],
})
export class StudentAddFormComponent implements OnInit {
  constructor() {}
  imgAvatar: any;
  studentForm = new FormGroup({
    username: new FormControl(''),
    fullname: new FormControl(''),
    email: new FormControl(),
    password: new FormControl(),
    gender: new FormControl('true'),
    birthday: new FormControl(),
    schoolfee: new FormControl(),
    avatar: new FormControl(),
  });
  @Output('addStudent') addStudentForm = new EventEmitter();
  ngOnInit(): void {}
  saveStudent() {
    this.addStudentForm.emit(this.studentForm.value);
  }
}
