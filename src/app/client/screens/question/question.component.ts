import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css'],
})
export class QuestionComponent implements OnInit {
  formSave = new FormGroup({
    idQues: new FormControl(''),
  });

  userId = localStorage.getItem('authorId');
  saveStudentQuiz: any = {
    idUser: this.userId,
    // idSub: '',
    record: { idQues: null, idAns: null },
  };

  constructor() {}
  coutQuestion: number = 0;
  @Input('dataQuiz') listQues: any;

  ngOnInit(): void {
    ++this.coutQuestion;
  }
  submitFormQuiz() {
    // console.log(333);
    // console.log(this.saveStudentQuiz);
    console.log({ ...this.saveStudentQuiz });
  }
  saveQuesId() {
    console.log(33);
  }
}
