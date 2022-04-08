// import moment from 'moment';
//   now = moment().format('DD/MM/YYYY HH:mm:ss');

// import { StudentService } from 'src/app/services/admin/student.service';
// import { SubjectService } from './../services/subject.service';
// import { ActivatedRoute } from '@angular/router';
// import { Component, OnInit } from '@angular/core';

// @Component({
//   selector: 'app-test-quiz',
//   templateUrl: './test-quiz.component.html',
//   styleUrls: ['./test-quiz.component.css'],
// })
// export class TestQuizComponent implements OnInit {
//   codeSubject: string = '';
//   listQuestion: Array<any> = [];
//   name_subject = '';
//   countdown: any;
//   totalAnswered: number = 0;
//   rightAnswer: number = 0;
//   markSubject = {
//     subject: '',
//     score: 0,
//   };
//   account: any = '';

//   constructor(
//     private router: ActivatedRoute,
//     private QuestionAnswer: QuestionAnswerService,
//     private Subject: SubjectService,
//     private Student: StudentService
//   ) {}

//   ngOnInit(): void {
//     // console.log(new Date().getTime());

//     this.router.params.subscribe((par) => {
//       this.codeSubject = par['idsubject'];
//     });
//     this.getQuestion();
//     // this.timeout();
//   }
//   getQuestion() {
//     this.Subject.subject_by_code(this.codeSubject).subscribe((data) => {
//       this.name_subject = data[0].Name;
//     });
//     this.QuestionAnswer.list(this.codeSubject).subscribe((data) => {
//       while (this.listQuestion.length < 10) {
//         let rand = Math.floor(Math.random() * data.length);
//         if (!this.listQuestion.includes(rand)) {
//           this.listQuestion.push(data[rand]);
//         }
//       }
//       console.log(this.listQuestion);
//     });
//   }
//   //countdown
//   timer = 15 * 60;

//   x = setInterval(() => {
//     var minutes = Math.floor(this.timer / 60);
//     var second = this.timer % 60;
//     if (this.timer <= 0) {
//       clearInterval(this.x);
//       alert('hết giờ');
//       this.submitQuiz();
//     } else {
//       this.countdown = minutes + ' Phút ' + second + ' Giây';
//     }
//     this.timer--;
//   }, 1000);
//   submitQuiz() {
//     this.rightAnswer = 0;
//     this.totalAnswered = 0;
//     for (let i = 0; i < this.listQuestion.length; i++) {
//       if (
//         'selected' in this.listQuestion[i] &&
//         this.listQuestion[i]['selected'] != null
//       ) {
//         this.totalAnswered++;

//         if (
//           this.listQuestion[i]['selected'] == this.listQuestion[i]['AnswerId']
//         ) {
//           this.rightAnswer++;
//         }
//       }
//     }
//     this.markSubject.score = Number(this.rightAnswer);
//     this.markSubject.subject = this.codeSubject;

//     let data =
//       localStorage.getItem('account') != null
//         ? localStorage.getItem('account')
//         : null;
//     if (data != null) {
//       this.account = JSON.parse(data);
//       this.account.marks = this.markSubject;
//     }
//     localStorage.setItem('account', JSON.stringify(this.account));
//     this.Student.update(this.account, this.account.id).subscribe((data) => {
//       window.location.href = `/quiz/${this.codeSubject}/score`;
//     });
//   }
// }
