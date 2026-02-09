import { UsersService } from './../../shared/services/users.service';
import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, NonNullableFormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create',
  imports: [ReactiveFormsModule],
  templateUrl: './create.html',
  styleUrl: './create.scss',
})
export class Create {
  public usersService = inject(UsersService);
  public router = inject(Router);

  public form = new FormGroup({
    name: new FormControl('', { validators: Validators.required,  nonNullable: true }),
  });

  public criarUsuario() {
    const nomeUsuario = this.form.controls.name.value;

    this.usersService.createUser({ name: nomeUsuario }).subscribe(() => {
      this.router.navigateByUrl('');
    });
  }
}
