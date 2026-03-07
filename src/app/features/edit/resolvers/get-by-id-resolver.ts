import { ResolveFn } from '@angular/router';
import { UsersService } from '../../../shared/services/users.service';
import { inject } from '@angular/core';
import { User } from '../../../shared/interfaces/user';

export const getByIdResolver: ResolveFn<User> = (route, state) => {
  const usersService = inject(UsersService);

  return usersService.getById(Number(route.paramMap.get('id')));
};
