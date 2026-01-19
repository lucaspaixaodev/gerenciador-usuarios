import { Component, inject, input, output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { UsersService } from '../../../../shared/services/users.service';
@Component({
  selector: 'app-users-list',
  imports: [FormsModule],
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
