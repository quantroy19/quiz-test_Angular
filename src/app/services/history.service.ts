import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class HistoryService {
  constructor(private http: HttpClient) {}
  getNameSubbyId(id: string): Observable<any> {
    return this.http.get<any>(environment.subject_api + `/?Code=${id}`);
  }
}
