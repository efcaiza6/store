import { Routes } from '@angular/router';
import { NotFoundComponent } from '@info/pages/not-found/not-found.component';
import { LayoutComponent } from '@shared/components/layout/layout.component';
import { ProductDetailComponent } from '@products/pages/product-detail/product-detail.component';
import { BasicFormComponent } from './domains/forms/components/basic-form/basic-form.component';

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
    path: '**',
    component: NotFoundComponent,
  },
];
