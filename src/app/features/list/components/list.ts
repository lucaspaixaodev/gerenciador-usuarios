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
  styles: `
    .action-container {
      display: flex;
      align-items: center;

      .button-action {
        margin-left: auto;
      }
    }
  `,
  template: `
    <div class="action-container">
      <app-search-input [(search)]="search"></app-search-input>
      <div class="button-action">
        <a matButton="elevated" routerLink="/create">Criar Usuário</a>
      </div>
    </div>

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
