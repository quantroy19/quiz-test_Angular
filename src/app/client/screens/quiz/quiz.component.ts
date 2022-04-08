import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { QuizService } from 'src/app/services/quiz.service';
import { Router } from '@angular/router';
import { Toast, ToastrService } from 'ngx-toastr';
import moment from 'moment';
@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css'],
})
export class QuizComponent implements OnInit {
  // subId: string =;
  constructor(
    private activateRoute: ActivatedRoute,
    private quizService: QuizService
  ) {}
  subId: any;
  subName: any = '';
  arrNumberRand: Array<any> = [];
  listQuiz: Array<any> = [];
  today: any = moment().format('DD/MM/YYYY HH:mm:ss');

  ngOnInit(): void {
    // if (!localStorage.getItem('authorName')) {
    //   this.router.navigate(['/login']);
    //   this.toastr.warning('Please login!');
    // }

    this.subId = this.activateRoute.snapshot.paramMap.get('id');

    this.getQuizbyId(this.subId);
    this.getNameSubbySubId(this.subId);
  }
  getQuizbyId(id: any) {
    this.quizService.getQuizbySubId(id).subscribe((data) => {
      while (this.listQuiz.length < 10) {
        let rand = Math.floor(Math.random() * data.length);
        if (!this.arrNumberRand.includes(rand)) {
          this.arrNumberRand.push(rand);
          this.listQuiz.push(data[rand]);
        }
      }
      // console.log(this.arrNumberRand);
      // console.log(this.listQuiz);
    });
  }
  getNameSubbySubId(id: any) {
    this.quizService.getNameSubbySubId(id).subscribe((data) => {
      return (this.subName = data[0].Name);
    });
  }
}
