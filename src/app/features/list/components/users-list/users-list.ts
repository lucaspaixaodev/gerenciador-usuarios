import { Component, input, output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { User } from '../../../../shared/interfaces/user';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { ErrorBtn } from './directives/error-btn';
import { TitleCasePipe } from '@angular/common';
import { TruncatePipe } from './pipes/truncate/truncate-pipe';
@Component({
  selector: 'app-users-list',
  imports: [
    FormsModule, 
    MatCardModule, 
    MatButtonModule, 
    ErrorBtn, 
    TitleCasePipe, 
    TruncatePipe
  ],
  templateUrl: './users-list.html',
  styleUrl: './users-list.scss',
})
export class UsersList {
  users = input.required<User[]>();
  removeUser = output<User>({ alias: 'remover' });

  remove(user: User) {
    this.removeUser.emit(user);
  }
}
