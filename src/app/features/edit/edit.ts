import { UsersService } from './../../shared/services/users.service';
import { Component, computed, inject, input, OnInit, signal } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatAnchor, MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { User } from '../../shared/interfaces/user';

@Component({
  selector: 'app-edit',
 imports: [ReactiveFormsModule, MatFormFieldModule, MatInputModule, MatAnchor, MatButtonModule, RouterLink],
  templateUrl: './edit.html',
  styleUrl: './edit.scss',
})
export class Edit implements OnInit {
  public usersService = inject(UsersService);
  public router = inject(Router);
  public user = input.required<User>();

  public form = new FormGroup({
    name: new FormControl('', { validators: Validators.required,  nonNullable: true }),
  });

  public ngOnInit() {
    this.form.controls.name.setValue(this.user().name);
  }

  public editarUsuario() {
    const nomeUsuario = this.form.controls.name.value;

    this.usersService.put(this.user().id, { name: nomeUsuario }).subscribe(() => {
      this.router.navigateByUrl('');
    });
  }
}
