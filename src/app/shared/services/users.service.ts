import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  private _http = inject(HttpClient);
  private _baseURL = 'http://localhost:3000';

  getAll() {
    return this._http.get<string[]>(`${this._baseURL}/users`);
  }
}
