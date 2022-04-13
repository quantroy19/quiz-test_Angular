import { SharedService } from './../../../services/shared.service';
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
  textContent: any = '';
  constructor(
    private subjectService: SubjectService,
    private sharedService: SharedService
  ) {}
  ngOnInit(): void {
    this.subjectService.getListSubject().subscribe((data) => {
      this.listSub = data;

      this.sharedService.currentMess.subscribe((data) => {
        this.textContent = data;
        this.searchSub(this.textContent);
      });
    });
  }
  searchSub(data: any) {
    this.subjectService.getListSubjectBySearch(data).subscribe((data) => {
      console.log(data);
      this.listSub = data;
    });
  }
}
