import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MatFormField, MatInput, MatLabel } from '@angular/material/input';
import { Router } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { CommonModule } from '@angular/common';
import { MyValidators } from '@shared/utils/validators';
import { MatRadioModule } from '@angular/material/radio';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatInput,
    MatButtonModule,
    MatCardModule,
    MatLabel,
    MatFormField,
    MatInputModule,
    MatFormFieldModule,
    MatRadioModule,
  ],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css',
})
export class RegisterComponent {
  form: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router // private authService: AuthService
  ) {
    this.form = this.buildForm();
    this.validacionCondicionada();
  }

  ngOnInit() {}

  register(event: Event) {
    event.preventDefault();
    if (this.form.valid) {
      const value = this.form.value;
      // this.authService.createUser(value.email, value.password).then(() => {
      //   this.router.navigate(['/auth/login']);
      // });
    }
  }

  private buildForm(): FormGroup {
    return (this.form = this.formBuilder.group(
      {
        email: ['', [Validators.required]],
        password: [
          '',
          [
            Validators.required,
            Validators.minLength(6),
            MyValidators.validPassword,
          ],
        ],
        confirmPassword: ['', [Validators.required]],
        type: ['company', Validators.required],
        companyName: ['', Validators.required],
      },
      {
        validators: MyValidators.matchPasswords,
      }
    ));
  }

  validacionCondicionada() {
    this.typeField?.valueChanges.subscribe((value) => {
      console.log(value);
      if (value === 'company') {
        this.companyNameField?.setValidators([Validators.required]);
      } else {
        this.companyNameField?.setValidators(null);
      }
      this.companyNameField?.updateValueAndValidity();
    });
  }

  get typeField() {
    return this.form.get('type');
  }
  get companyNameField() {
    return this.form.get('companyName');
  }
}
