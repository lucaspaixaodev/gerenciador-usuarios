import { Component, computed, inject, input, signal } from '@angular/core';
import { UsersService } from '../../../shared/services/users.service';
import { SearchInput } from './search-input/search-input';
import { UsersList } from './users-list/users-list';

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
    usersService = inject(UsersService);
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
