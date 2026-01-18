import { Injectable } from '@angular/core';
import { delay, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class Users {
  getAll() {
    return of(['Lucas', 'Alaine', 'Miguel']).pipe(delay(1000));
  }
}
