import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SpectrumStatisticService {
  constructor(private http: HttpClient) {}
  getDataSpectrumStatistics(): Observable<any> {
    return this.http.get(environment.apiUrl + '/score_spectrum_statistics');
  }
}
