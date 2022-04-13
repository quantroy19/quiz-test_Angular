import Swal from 'sweetalert2';
import { QuestionService } from 'src/app/services/question.service';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { QuizService } from 'src/app/services/quiz.service';

@Component({
  selector: 'app-admin-question',
  templateUrl: './admin-question.component.html',
  styleUrls: ['./admin-question.component.css'],
})
export class AdminQuestionComponent implements OnInit {
  constructor(
    private activatedRoute: ActivatedRoute,
    private quizService: QuizService,
    private questionService: QuestionService
  ) {}
  sub_id: any = '';
  list_question: any = [];
  ngOnInit(): void {
    this.sub_id = this.activatedRoute.snapshot.paramMap.get('id');
    this.getListQuestionbyId(this.sub_id);
  }
  getListQuestionbyId(id: any) {
    this.quizService.getQuizbySubId(id).subscribe((data) => {
      this.list_question = data;
    });
  }
  addQuestion(data: any) {
    // console.log(data);
    this.questionService.addQues(this.sub_id, data).subscribe((data) => {
      console.log(data);
      // this.list_question.push(data);
      this.getListQuestionbyId(this.sub_id);
    });
  }
  confirmRemove(quesId: any, subId: any = this.sub_id) {
    Swal.fire({
      title: `Are you sure want to remove question ID ${quesId}`,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes',
      cancelButtonText: 'No',
    }).then((result: any) => {
      if (result.value) {
        Swal.fire('Deleted!', '', 'success');
        this.removeQuestion(quesId);
      }
    });
  }
  removeQuestion(quesId: any, subId: any = this.sub_id) {
    this.questionService.removeQues(quesId, subId).subscribe((data) => {
      console.log(data);
      this.list_question = this.list_question.filter(
        (item: any) => item.id !== quesId
      );
    });
  }
}
