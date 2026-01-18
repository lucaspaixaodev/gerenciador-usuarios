import { Component, computed, signal } from '@angular/core';
import { UsersList } from './lists/components/users-list/users-list';
import { SearchInput } from './lists/components/search-input/search-input';
@Component({
  selector: 'app-root',
  imports: [UsersList, SearchInput],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
  export class App {
    search = signal('');

    users = signal(['Lucas', 'Alaine', 'Miguel']);

    filteredUsers = computed(() => {
    return this.users().filter(user => user.toLowerCase().includes(this.search().toLowerCase()));
  }
  );

    remove(user: string) {
      this.users.update(users => users.filter(u => u !== user));
    }
}
