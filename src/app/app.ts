import { Component, signal } from '@angular/core';
import { UsersList } from './lists/components/users-list/users-list';
@Component({
  selector: 'app-root',
  imports: [UsersList],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
  export class App {
    users = signal(['John', 'Jane', 'Jim', 'Jill']);

    remove(user: string) {
      this.users.update(users => users.filter(u => u !== user));
    }
}
