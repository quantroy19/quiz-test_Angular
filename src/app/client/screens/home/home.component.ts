// import { environment } from './../../../../environments/environment.prod';

import { Component, OnInit, Input } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})

// environment.author;
export class HomeComponent implements OnInit {
  @Input('dataSub') h: any;
  loggedInUser = JSON.parse(localStorage.getItem('login_user') || '{}');
  constructor() {}
  // authorName = localStorage.getItem('login_user');
  ngOnInit(): void {
    // console.log(`qq`, this.authorName);
  }
}
