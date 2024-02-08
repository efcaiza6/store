import { Component } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-basic-form',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './basic-form.component.html',
  styleUrl: './basic-form.component.css',
})
export class BasicFormComponent {
  nameField = new FormControl('');
  emailField = new FormControl('');
  phoneField = new FormControl('');
  colorField = new FormControl('');
  dateField = new FormControl('');
  numberField = new FormControl(12);
  categoryField = new FormControl('category-1');
  tagField = new FormControl('');

  ngOnInit() {
    this.nameField.valueChanges.subscribe((value) => {
      console.log(value);
    });
  }

  getNameValue() {
    console.log(this.nameField.value);
  }
}
