import { Component, OnInit } from '@angular/core';
import { StudentService } from 'src/app/services/admin/student.service';
import { ToastrService } from 'ngx-toastr';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css'],
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
      this.listStudent = data;
    });
  }
  saveAddFormStudent($dataStudent: any): void {
    this.studentService.saveAddStudent($dataStudent).subscribe((data) => {
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
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal.fire('Cancelled', '', 'error');
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
