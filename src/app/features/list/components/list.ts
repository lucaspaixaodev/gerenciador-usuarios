import { Component, computed, inject, input, signal } from '@angular/core';
import { UsersService } from '../../../shared/services/users.service';
import { SearchInput } from './search-input/search-input';
import { UsersList } from './users-list/users-list';
import { User } from '../../../shared/interfaces/user';

@Component({
  selector: 'app-list',
  imports: [SearchInput, UsersList],
  template: `
    @if(isLoading()) {
    <p>Loading users...</p>
  } @else {
    <app-search-input [(search)]="search"></app-search-input>
    <app-users-list [users]="filteredUsers()" (remover)="remove($event)"></app-users-list>
  }
`
})
export class List {
  public usersService = inject(UsersService);
  public isLoading = signal(true);
  public search = signal('');
  public users = signal<User[]>([]);

  public filteredUsers = computed(() => {
    return this.users().filter(user => user.name.toLowerCase().includes(this.search().toLowerCase()));
    }
  );

  public ngOnInit() {
    this.usersService.getAll().subscribe(users => {
      this.users.set(users);
      this.isLoading.set(false);
    });
  }

  public remove({ id }: User) {
    this.users.update(users => users.filter(u => u.id !== id));
  }
}
