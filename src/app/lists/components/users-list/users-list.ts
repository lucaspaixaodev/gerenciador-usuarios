import { Component, input, output } from '@angular/core';
@Component({
  selector: 'app-users-list',
  imports: [],
  templateUrl: './users-list.html',
  styleUrl: './users-list.scss',
})
export class UsersList {
  users = input.required<string[]>();

  removeUser = output<string>({alias: 'remover'});

  remove(user: string) {
    this.removeUser.emit(user);
  }
}
