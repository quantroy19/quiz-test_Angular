import { Component, OnInit } from '@angular/core';
import { HistoryService } from 'src/app/services/history.service';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css'],
})
export class HistoryComponent implements OnInit {
  constructor(private historyService: HistoryService) {}
  dataUser = JSON.parse(localStorage.getItem('login_user') || '{}');
  listQuizHistory: any;
  // moment = require('moment');
  ngOnInit(): void {
    this.getDataQuizHistory();
  }
  getDataQuizHistory() {
    this.listQuizHistory = this.dataUser.mark;
  }
}
