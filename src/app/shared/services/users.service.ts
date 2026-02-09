import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { User, UserPayload } from '../interfaces/user';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  private _http = inject(HttpClient);
  private _baseURL = 'http://localhost:3000/users';

  public getAll() {
    return this._http.get<User[]>(`${this._baseURL}`);
  }

  public post(payload: UserPayload) {
    return this._http.post<User>(`${this._baseURL}`, payload );
  }

  public delete(id: number) {
    return this._http.delete<{}>(`${this._baseURL}/${id}`);
  }
}
