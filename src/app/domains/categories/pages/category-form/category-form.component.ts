import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';



@Component({
  selector: 'app-category-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule,MatCardModule,MatFormFieldModule,MatInputModule],
  templateUrl: './category-form.component.html',
  styleUrl: './category-form.component.css',
})
export class CategoryFormComponent {
  form: FormGroup;
  constructor(private formBuilder: FormBuilder) {
    this.form = this.buildForm();
  }

  private buildForm(): FormGroup {
    return this.formBuilder.group({
      name: ['', Validators.required],
      image: ['', Validators.required],
    });
  }

  get nameField() {
    return this.form.get('name');
  }
  get imageField() {
    return this.form.get('image');
  }

  save() {
    // if (this.form.valid) {
    //   this.createCategory();
    // } else {
    //   this.form.markAllAsTouched();
    // }
  }

  // private createCategory() {
  //   const data = this.form.value;
  //   this.categoriesService.createCategory(data)
  //   .subscribe(rta => {
  //     this.router.navigate(['/admin/categories']);
  //   });
  // }

}
