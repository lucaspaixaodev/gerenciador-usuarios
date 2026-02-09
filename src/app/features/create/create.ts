import { UsersService } from './../../shared/services/users.service';
import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, NonNullableFormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-create',
  imports: [ReactiveFormsModule],
  templateUrl: './create.html',
  styleUrl: './create.scss',
})
export class Create {
  public usersService = inject(UsersService);

  form = new FormGroup({
    name: new FormControl('', { validators: Validators.required,  nonNullable: true }),
  });

  criarUsuario() {
    const nomeUsuario = this.form.controls.name.value;

    this.usersService.createUser({ name: nomeUsuario }).subscribe(() => {
      console.log('Usuário criado com sucesso!');
    });
  }
}
