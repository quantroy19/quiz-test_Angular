import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root',
})
export class SubjectService {
  constructor(private http: HttpClient) {}
  getListSubject(): Observable<any> {
    return this.http.get<any>(environment.subject_api);
  }
  // getListSubjectBySearch(text: string): Observable<any> {
  //   let apiUrl = environment.apiUrl + '/subjects';
  //   console.log(apiUrl + `?Name_like=${text}`);
  //   return this.http.get<any>(apiUrl + `?Name_like=${text}`);
  // }
}
