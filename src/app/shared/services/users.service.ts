import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { User, UserPayload } from '../interfaces/user';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  private _http = inject(HttpClient);
  private _baseURL = 'http://localhost:3000';

  getAll() {
    return this._http.get<User[]>(`${this._baseURL}/users`);
  }

  createUser(payload: UserPayload) {
    return this._http.post<User>(`${this._baseURL}/users`, payload );
  }
}
