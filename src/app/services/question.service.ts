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
    return this.http.get<any>(
      environment.baseAPI + `/${subId}?_sort=id&_order=desc`
    );
  }
  addQues(subId: any, data: any): Observable<any> {
    return this.http.post<any>(environment.baseAPI + `/${subId}`, data);
  }
  removeQues(id: any, subId: any): Observable<any> {
    return this.http.delete<any>(environment.baseAPI + `/${subId}/${id}`);
  }
}
