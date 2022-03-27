import { Component, OnInit, Input } from '@angular/core';
import { SubjectService } from 'src/app/services/subject.service';

@Component({
  selector: 'app-subject',
  templateUrl: './subject.component.html',
  styleUrls: ['./subject.component.css'],
})
export class SubjectComponent implements OnInit {
  // @Input() dataSub: any;
  listSub: any = [];
  constructor(private subjectService: SubjectService) {}
  ngOnInit(): void {
    this.subjectService.getListSubject().subscribe((data) => {
      this.listSub = data;
    });
  }
}
