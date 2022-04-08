import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class StudentService {
  constructor(private http: HttpClient) {}
  getAllStudent(): Observable<any> {
    return this.http.get(environment.user_api);
  }
  getStudentById(id: any): Observable<any> {
    return this.http.get(environment.user_api + `/${id}`);
  }
  saveAddStudent(data: any): Observable<any> {
    return this.http.post(`${environment.user_api}`, `${data}`);
  }
  saveEditStudent(data: any, id: number): Observable<any> {
    return this.http.patch(environment.user_api + `/${id}`, data);
  }
  removeStudent(id: any): Observable<any> {
    return this.http.delete(environment.user_api + `/${id}`);
  }
}
