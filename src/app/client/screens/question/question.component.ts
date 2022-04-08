import Swal from 'sweetalert2';
import { UserService } from 'src/app/services/user.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { QuestionService } from 'src/app/services/question.service';
import moment from 'moment';
import { Input } from '@angular/core';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css'],
})
export class QuestionComponent implements OnInit {
  @Input('dataToday') dataDateToday: any;
  subId: any = '';
  arrRand: Array<any> = [];
  listQues: Array<any> = [];
  countAnswered: any = 0;
  markSub = {
    sub_id: '',
    mark: 0,
    start_time: '',
    end_time: '',
  };
  infoUser: any = '';
  dataUser = JSON.parse(localStorage.getItem('login_user') || '{}');
  constructor(
    private activateRoute: ActivatedRoute,
    private route: Router,
    private questionService: QuestionService,
    private userService: UserService
  ) {}
  ngOnInit(): void {
    this.subId = this.activateRoute.snapshot.paramMap.get('id');
    this.getQues();
  }
  getQues() {
    this.questionService.getQuesbySubId(this.subId).subscribe((data) => {
      while (this.listQues.length < 10) {
        let rand = Math.floor(Math.random() * data.length);
        if (!this.arrRand.includes(rand)) {
          this.arrRand.push(rand);
          this.listQues.push(data[rand]);
        }
      }
      // console.log(this.listQues);
    });
  }
  confirmSubmitFormQuiz() {
    Swal.fire({
      title: `Are you sure want to submit `,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes',
      cancelButtonText: 'No',
    }).then((result) => {
      if (result.value) {
        Swal.fire('Submited!', '', 'success');
        this.submitFormQuiz();
        // this.route.navigate(['home']);
      }
    });
  }
  submitFormQuiz() {
    let end_time = moment().format('DD/MM/YYYY HH:mm:ss');

    // console.log(this.listQues);
    this.markSub.sub_id = this.subId;
    this.countAnswered = 0;
    this.markSub.start_time = this.dataDateToday;
    this.markSub.end_time = end_time;
    for (let i = 0; i < this.listQues.length; i++) {
      // console.log(this.listQues[i]);
      if ('selected' in this.listQues[i]) {
        Number(this.countAnswered++);
      }
      if (this.listQues[i].selected === this.listQues[i].AnswerId) {
        Number(this.markSub.mark++);
      }
    }
    // console.log(this.countAnswered, this.markSub);
    console.log(this.dataUser.mark);
    if (Array.isArray(this.dataUser.mark)) {
      this.dataUser.mark.push(this.markSub);
    }
    // this.dataUser.mark = this.dataUser.mark.push(this.markSub);
    this.userService
      .updateMark(this.dataUser.id, this.dataUser)
      .subscribe((data) => {
        localStorage.setItem('login_user', JSON.stringify(data));
        console.log(data);
        this.route.navigate(['']);
      });
    // console.log(a);
  }
}
