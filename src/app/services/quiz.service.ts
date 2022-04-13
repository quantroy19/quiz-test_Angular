import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class QuizService {
  constructor(private http: HttpClient) {}
  getQuizbySubId(subId: any): Observable<any> {
    return this.http.get<any>(
      environment.baseAPI + `/${subId}?_sort=id&_order=desc`
    );
  }
  getNameSubbySubId(subId: any): Observable<any> {
    return this.http.get<any>(environment.subject_api + `/?Code=${subId}`);
  }
}
