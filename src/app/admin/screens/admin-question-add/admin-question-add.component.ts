import { ToastrService } from 'ngx-toastr';
import { QuestionService } from 'src/app/services/question.service';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, FormArray } from '@angular/forms';

@Component({
  selector: 'app-admin-question-add',
  templateUrl: './admin-question-add.component.html',
  styleUrls: ['./admin-question-add.component.css'],
})
export class AdminQuestionAddComponent implements OnInit {
  // aId: any = '3';
  @Output('evAddQues') addQuesInfo = new EventEmitter();
  subId: any = '';
  AddQue: any = {
    Text: '',
    AnswerId: '',
    Answers: [],
  };
  constructor(
    private activatedRouter: ActivatedRoute,
    private questionService: QuestionService,
    private toast: ToastrService
  ) {}
  formAddQue: any = new FormGroup({
    Text: new FormControl(),
    AnswerId: new FormControl(),
    Answers_temp: new FormArray([new FormControl()]),
    Answers: new FormControl(),
  });
  Answers_temp = this.formAddQue.get('Answers_temp') as FormArray;
  ngOnInit(): void {
    this.subId = this.activatedRouter.snapshot.paramMap.get('id');
  }
  submitFormAddQue() {
    console.log(this.formAddQue.value.Answers_temp);

    let data = this.formAddQue.value;
    console.log(data);

    this.AddQue.Text = data.Text;
    this.AddQue.AnswerId = data.AnswerId;
    this.AddQue.Answers = [];
    for (
      let index = 0;
      index < this.formAddQue.value.Answers_temp.length;
      index++
    ) {
      let obj2 = { id: index, Text: this.formAddQue.value.Answers_temp[index] };
      //  const element = this.formAddQue.value.Answers_temp[index];
      // console.log(obj2);
      this.AddQue.Answers.push(obj2);
    }
    // console.log(this.AddQue);

    // delete.data

    this.addQuesInfo.emit(this.AddQue);
  }
  addAsn() {
    this.Answers_temp.push(new FormControl(''));
    console.log(this.Answers_temp.value);
  }
  removeAsn(index: number) {
    this.Answers_temp.removeAt(index);
  }
  setAsnIdCorrect(e: any) {
    this.formAddQue.controls['AnswerId'].setValue(e);
  }
}
