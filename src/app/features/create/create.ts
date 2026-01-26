import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-create',
  imports: [ReactiveFormsModule],
  templateUrl: './create.html',
  styleUrl: './create.scss',
})
export class Create {
  form = new FormGroup({
    name: new FormControl(''),
  });

  criarUsuario() {
    const nomeUsuario = this.form.controls.name.value;
    console.log('Criando usuário com nome:', nomeUsuario);
  }
}
