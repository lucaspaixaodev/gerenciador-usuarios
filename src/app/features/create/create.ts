import { UsersService } from './../../shared/services/users.service';
import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { Router, RouterLink } from '@angular/router';
import { MatAnchor, MatButtonModule } from "@angular/material/button";

@Component({
  selector: 'app-create',
  imports: [ReactiveFormsModule, MatFormFieldModule, MatInputModule, MatAnchor, MatButtonModule, RouterLink],
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

    this.usersService.post({ name: nomeUsuario }).subscribe(() => {
      this.router.navigateByUrl('');
    });
  }
}
