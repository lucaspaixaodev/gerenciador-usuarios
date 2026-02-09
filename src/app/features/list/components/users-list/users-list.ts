import { Component, inject, input, output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { UsersService } from '../../../../shared/services/users.service';
import { User } from '../../../../shared/interfaces/user';
@Component({
  selector: 'app-users-list',
  imports: [FormsModule],
  templateUrl: './users-list.html',
  styleUrl: './users-list.scss',
})
export class UsersList {
  users = input.required<User[]>();

  removeUser = output<User>({alias: 'remover'});

  remove(user: User) {
    this.removeUser.emit(user);
  }
}
