import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Result } from '../interfaces/base/result';
import { User } from '../interfaces/user';
import { URL_API } from './url/api-url';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpClient: HttpClient) { }

  // ! Login USER
  loginUser(user: User): Observable<Result<User>> {
    var uri = environment.baseApi+URL_API.USER.login;
    return this.httpClient.post<Result<User>>(uri, user);
  }

}
