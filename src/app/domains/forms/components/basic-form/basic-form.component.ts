import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-basic-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './basic-form.component.html',
  styleUrl: './basic-form.component.css',
})
export class BasicFormComponent {
  nameField = new FormControl('', [
    Validators.required,
    Validators.maxLength(10),
  ]);
  emailField = new FormControl('');
  phoneField = new FormControl('');
  colorField = new FormControl('');
  dateField = new FormControl('');
  numberField = new FormControl(12);
  categoryField = new FormControl('category-1');
  tagField = new FormControl('');
  agreeField = new FormControl(false);
  genderField = new FormControl('');
  zoneField = new FormControl('');

  ngOnInit() {
    this.nameField.valueChanges.subscribe((value) => {
      console.log(value);
    });
  }

  getNameValue() {
    console.log(this.nameField.value);
  }

  get isNameFieldValid(){
    return this.nameField.touched && this.nameField.valid
  }

  get isNameFieldInvalid(){
    return this.nameField.touched && this.nameField.invalid
  }
}
