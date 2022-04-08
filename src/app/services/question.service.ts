import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class QuestionService {
  constructor(private http: HttpClient) {}
  getQuesbySubId(subId: any): Observable<any> {
    return this.http.get<any>(environment.baseAPI + `/${subId}`);
  }
}
