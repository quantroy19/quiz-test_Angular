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
  constructor() {}
  authorName = localStorage.getItem('authorName');
  ngOnInit(): void {}
}
