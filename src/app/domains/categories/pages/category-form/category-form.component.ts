import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { Storage, ref, uploadBytesResumable } from '@angular/fire/storage';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { Router } from '@angular/router';
import { CategoryService } from '@shared/services/category.service';
import { getDownloadURL } from 'firebase/storage';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-category-form',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
  ],
  templateUrl: './category-form.component.html',
  styleUrl: './category-form.component.css',
})
export class CategoryFormComponent {
  form: FormGroup;
  private categoryService = inject(CategoryService);
  private router: Router = new Router();
  private storage = inject(Storage);

  uploadProgress$!: Observable<number>;
  downloadURL$!: Observable<string>;

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
    if (this.form.valid) {
      this.createCategory();
    } else {
      this.form.markAllAsTouched();
    }
  }

  private createCategory() {
    const data = this.form.value;
    this.categoryService.createCategory(data).subscribe((rta) => {
      console.log(rta);
      this.router.navigate(['/']);
    });
  }

  uploadFile(event: any) {
    const image = event.target.files[0];
    // const name = 'category.png';
    const filePath = `archivos/${image.name}`;
    const fileRef = ref(this.storage, filePath);
    const uploadFile = uploadBytesResumable(fileRef, image);
    uploadFile.on(
      'state_changed',
      (snapshot) => {
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log('Progreso: ', progress);
      },
      (error) => {
        console.error('Error al cargar el archivo: ', error);
      },
      async () => {
        console.log('El archivo se subio correctamente');
        const url = await getDownloadURL(fileRef);
        console.log('Url del archivo: ', url);
        this.imageField?.setValue(url);
      }
    );
  }
}
