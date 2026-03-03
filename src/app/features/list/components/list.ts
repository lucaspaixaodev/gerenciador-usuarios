import { Component, computed, effect, inject, input, signal } from '@angular/core';
import { UsersService } from '../../../shared/services/users.service';
import { SearchInput } from './search-input/search-input';
import { UsersList } from './users-list/users-list';
import { User } from '../../../shared/interfaces/user';

@Component({
  selector: 'app-list',
  imports: [SearchInput, UsersList],
  template: `
    <app-search-input [(search)]="search"></app-search-input>

    @if (isLoading()) {
      <p>Loading users...</p>
    } @else {
      <app-users-list [users]="users()" (remover)="remove($event)"></app-users-list>
    }
  `,
})
export class List {
  public usersService = inject(UsersService);
  public isLoading = signal(true);
  public search = signal('');
  public users = signal<User[]>([]);

  constructor() {
    effect(() => {
      this.isLoading.set(true);
      this.getUsers();
    });
  }

  public ngOnInit() {
    this.getUsers();
  }

  public remove({ id }: User) {
    this.usersService.delete(id).subscribe(() => {
      this.users.update((users) => users.filter((u) => u.id !== id));
    });
  }

  private getUsers() {
    this.usersService.getAll(this.search()).subscribe((users) => {
      this.users.set(users);
      this.isLoading.set(false);
    });
  }
}
