import { Component, OnInit } from '@angular/core';
import { StudentService } from 'src/app/services/admin/student.service';
import { ToastrService } from 'ngx-toastr';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  // styleUrls: ['./student.component.css'],
})
export class StudentComponent implements OnInit {
  listStudent: Array<any> = [];
  studentItem: any = null;
  constructor(
    private studentService: StudentService,
    private toastr: ToastrService
  ) {}
  ngOnInit(): void {
    this.getAllStudents();
  }

  getAllStudents(): void {
    this.studentService.getAllStudent().subscribe((data) => {
      this.listStudent = data.filter((item: any) => 'password' in item);
      console.log(this.listStudent);
    });
  }
  saveAddFormStudent(dataStudent: any): void {
    console.log(dataStudent);

    this.studentService.saveAddStudent(dataStudent).subscribe((data) => {
      console.log(data);
      this.listStudent.push(data);

      this.toastr.success('Add Student Successfully!');
    });
  }
  confirmRemove(id: number, title: string) {
    Swal.fire({
      title: `Are you sure want to remove ${title}?`,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes',
      cancelButtonText: 'No',
    }).then((result) => {
      if (result.value) {
        Swal.fire('Deleted!', '', 'success');
        this.removeStudent(id);
      }
    });
  }
  removeStudent(id: any): void {
    this.studentService.removeStudent(id).subscribe(() => {
      this.listStudent = this.listStudent.filter((value) => value.id !== id);
    });
  }
  editStudent(data: any) {
    this.studentItem = data;
  }
}
