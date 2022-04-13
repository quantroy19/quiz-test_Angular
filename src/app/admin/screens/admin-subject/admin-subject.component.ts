import { SubjectService } from 'src/app/services/subject.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-subject',
  templateUrl: './admin-subject.component.html',
  styleUrls: ['./admin-subject.component.css'],
})
export class AdminSubjectComponent implements OnInit {
  listSub: any = [];
  constructor(private subjectService: SubjectService) {}
  ngOnInit(): void {
    this.subjectService.getListSubject().subscribe((data) => {
      this.listSub = data;
    });
  }
}
