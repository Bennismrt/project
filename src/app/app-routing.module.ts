import { Route } from '@angular/router';

export const appRoutes: Route[] = [

  {path: '', loadChildren: () => import('./home/home.module').then(m => m.HomeModule)},
  {path: 'add-product', loadChildren: () => import('./add-product/add-product.module').then(m => m.AddProductModule)},
];
