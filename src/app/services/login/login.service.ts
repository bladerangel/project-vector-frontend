import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from './../../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private url: string;
  private authUser: User;

  constructor(private http: HttpClient) {
    this.url = 'http://localhost:8080/user';
}


setAuthUser(user: User): void {
  this.authUser = user;
}

getAuthUser(): User {
  return this.authUser;
}

signIn(user: User): Observable<User> {

  return this.http.post<User>(this.url + '/signin', user);

}
}
