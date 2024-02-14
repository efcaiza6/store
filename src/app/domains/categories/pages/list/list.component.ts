import { CommonModule } from '@angular/common';
import { Component, SimpleChanges, inject, signal } from '@angular/core';
import { Category } from '@shared/models/category.model';
import { CategoryService } from '@shared/services/category.service';
import { CategoryComponent } from '../../components/category/category.component';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [CommonModule,CategoryComponent],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css',
})
export class ListComponent {
  categories = signal<Category[]>([]);
  private categoryService = inject(CategoryService);

  ngOnInit(changes: SimpleChanges) {
    this.getCategories();
  }

  private getCategories() {
    this.categoryService.getAll().subscribe({
      next: (categories) => {
        this.categories.set(categories);
      },
      error: () => {},
    });
  }
}
