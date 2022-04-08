import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, Observable, map } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private http: HttpClient, private router: Router) {}
  checkLogin(): Observable<any> {
    return this.http.get<any>(environment.user_api);
  }
  loginWithSocial(data: any): Observable<any> {
    return this.http.post(environment.user_api, data);
  }
  checkLoginWithSocial(email: string, ssId: string): Observable<any> {
    return this.http
      .get<any>(`${environment.user_api}?social_id=${ssId}&email=${email}`)
      .pipe(
        map((item) => {
          if (item.length > 0) {
            localStorage.setItem('login_user', JSON.stringify(item[0]));
            return item[0];
          }
          return null;
        })
      );
  }
  getUser(socail_id: string): Observable<any> {
    return this.http.get(environment.user_api + `?social_id=${socail_id}`);
  }
  updateMark(userId = Number, data: object): Observable<any> {
    return this.http.put(environment.user_api + `/${userId}`, data);
  }
  logout() {
    localStorage.removeItem('login_user');
    // this.router.navigate(['/login']);
  }
}
