import { Component, computed, DestroyRef, effect, inject, input, signal } from '@angular/core';
import { UsersService } from '../../../shared/services/users.service';
import { SearchInput } from './search-input/search-input';
import { UsersList } from './users-list/users-list';
import { User } from '../../../shared/interfaces/user';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { take } from 'rxjs';
import { RouterLink } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-list',
  imports: [SearchInput, UsersList, RouterLink, MatButtonModule],
  styleUrls: ['./list.scss'],
  templateUrl: './list.html',
})
export class List {
  public usersService = inject(UsersService);
  public isLoading = signal(true);
  public search = signal('');
  public users = signal<User[]>([]);
  public destroyRef = inject(DestroyRef);

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
    this.usersService
      .getAll(this.search())
      .pipe(takeUntilDestroyed(this.destroyRef), take(1))
      .subscribe((users) => {
        this.users.set(users);
        this.isLoading.set(false);
      });
  }
}
