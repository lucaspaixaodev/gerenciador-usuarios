import { Component, computed, inject, OnInit, signal } from '@angular/core';
import { UsersList } from './lists/components/users-list/users-list';
import { SearchInput } from './lists/components/search-input/search-input';
import { Users } from './shared/services/users';
@Component({
  selector: 'app-root',
  imports: [UsersList, SearchInput],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
  export class App implements OnInit {
    usersService = inject(Users);

    isLoading = signal(true);

    search = signal('');

    users = signal<string[]>([]);

    filteredUsers = computed(() => {
    return this.users().filter(user => user.toLowerCase().includes(this.search().toLowerCase()));
  }
  );

    ngOnInit() {
      this.usersService.getAll().subscribe(users => {
        this.users.set(users);
        this.isLoading.set(false);
      });
    }
    
    remove(user: string) {
      this.users.update(users => users.filter(u => u !== user));
    }
}
