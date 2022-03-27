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
    return this.http.get(environment.apiUrl + '/students');
  }
  getStudentById(id: any): Observable<any> {
    return this.http.get(environment.apiUrl + `/students/${id}`);
  }
  saveAddStudent(data: any): Observable<any> {
    return this.http.post(environment.apiUrl + '/students', data);
  }
  saveEditStudent(data: any, id: number): Observable<any> {
    return this.http.patch(environment.apiUrl + `/students/${id}`, data);
  }
  removeStudent(id: any): Observable<any> {
    return this.http.delete(environment.apiUrl + `/students/${id}`);
  }
}
