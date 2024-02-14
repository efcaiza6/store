import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Category } from '@shared/models/category.model';

@Injectable({
  providedIn: 'root',
})
export class CategoryService {
  private http = inject(HttpClient);

  constructor() {}

  getAll() {
    return this.http.get<Category[]>(
      'https://api.escuelajs.co/api/v1/categories'
    );
  }

  createCategory(data: Partial<Category>) {
    return this.http.post<Category>(
      'https://api.escuelajs.co/api/v1/categories/',
      data
    );
  }

  updateCategory(id: number, data: Partial<Category>) {
    return this.http.put<Category>(
      'https://api.escuelajs.co/api/v1/categories/' + id,
      data
    );
  }
}
