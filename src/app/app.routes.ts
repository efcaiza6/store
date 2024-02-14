import { Routes } from '@angular/router';
import { NotFoundComponent } from '@info/pages/not-found/not-found.component';
import { LayoutComponent } from '@shared/components/layout/layout.component';
import { ProductDetailComponent } from '@products/pages/product-detail/product-detail.component';
import { BasicFormComponent } from './domains/forms/components/basic-form/basic-form.component';
import { RegisterComponent } from './domains/auth/components/register/register.component';
import { CategoryComponent } from './domains/categories/components/category/category.component';
import { CategoryFormComponent } from './domains/categories/pages/category-form/category-form.component';
import { ListComponent } from './domains/categories/pages/list/list.component';

export const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: '',
        loadComponent: () => import('@products/pages/list/list.component'),
      },
      {
        path: 'about',
        loadComponent: () => import('@info/pages/about/about.component'),
      },
      {
        path: 'product/:id',
        component: ProductDetailComponent,
      },
      {
        path: 'basic',
        component: BasicFormComponent,
      },
    ],
  },
  {
    path: 'auth/register',
    component: RegisterComponent,
  },
  {
    path: 'category-form',
    component: CategoryFormComponent,
  },
  {
    path: 'category-list',
    component: ListComponent
  },
  {
    path: '**',
    component: NotFoundComponent,
  },
];
