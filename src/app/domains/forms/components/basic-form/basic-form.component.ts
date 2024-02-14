import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';

@Component({
  selector: 'app-basic-form',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
  ],
  templateUrl: './basic-form.component.html',
  styleUrl: './basic-form.component.css',
})
export class BasicFormComponent {
  form: FormGroup;
  constructor(private formBuilder: FormBuilder) {
    this.form = this.buildForm();
  }

  ngOnInit() {
    this.nameField?.valueChanges.subscribe((value) => {
      console.log(value);
    });
  }

  getNameValue() {
    console.log(this.nameField?.value);
  }

  save(event: Event) {
    if (this.form.valid) {
      console.log(this.form.value);
    } else {
      this.form.markAllAsTouched();
    }
  }

  private buildForm(): FormGroup {
    return this.formBuilder.group({
      fullName: this.formBuilder.group({
        name: [
          '',
          [
            Validators.required,
            Validators.maxLength(10),
            Validators.pattern(/^[a-zA-Z ]+$/),
          ],
        ],
        lastName: [
          '',
          [
            Validators.required,
            Validators.maxLength(10),
            Validators.pattern(/^[a-zA-Z ]+$/),
          ],
        ],
      }),
      email: ['', [Validators.required, Validators.email]],
      phone: ['', Validators.required],
      color: [''],
      date: [''],
      number: [
        12,
        [Validators.required, Validators.min(18), Validators.max(100)],
      ],
      category: ['category-1'],
      tag: [''],
      agree: [false, [Validators.requiredTrue]],
      gender: [''],
      zone: [''],
    });
  }

  get nameField() {
    return this.form.get('fullName')?.get('name');
  }
  get lastNameField() {
    return this.form.get('fullName')?.get('lastName');
  }
  get emailField() {
    return this.form.get('email');
  }
  get phoneField() {
    return this.form.get('phone');
  }
  get colorField() {
    return this.form.get('color');
  }
  get dateField() {
    return this.form.get('date');
  }
  get numberField() {
    return this.form.get('number');
  }
  get categoryField() {
    return this.form.get('category');
  }
  get tagField() {
    return this.form.get('tag');
  }
  get agreeField() {
    return this.form.get('agree');
  }
  get genderField() {
    return this.form.get('gender');
  }
  get zoneField() {
    return this.form.get('zone');
  }
  get isNameFieldValid() {
    return this.nameField?.touched && this.nameField.valid;
  }
  get isNameFieldInvalid() {
    return this.nameField?.touched && this.nameField.invalid;
  }

  email2 = new FormControl('', [Validators.required, Validators.email]);

  getErrorMessage() {
    if (this.email2.hasError('required')) {
      return 'You must enter a value';
    }

    return this.email2.hasError('email') ? 'Not a valid email' : '';
  }
}
