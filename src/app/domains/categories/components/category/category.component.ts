import { Component, Input, inject } from '@angular/core';
import { Category } from '@shared/models/category.model';

@Component({
  selector: 'app-category',
  standalone: true,
  imports: [],
  templateUrl: './category.component.html',
  styleUrl: './category.component.css',
})
export class CategoryComponent {
  @Input({ required: true }) category!: Category;
}
