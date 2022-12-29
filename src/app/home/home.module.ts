import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { SharedModule } from '../shared-module/shared.module';
import { HomeComponent } from './home.component';
const homeRoutes: Route[] = [
    {
        path     : '',
        component: HomeComponent
    }
];

@NgModule({
    declarations: [
        HomeComponent,
    ],
    imports     : [
      SharedModule,
      CommonModule,
      RouterModule.forChild(homeRoutes),
    ],
    exports: []
})
export class HomeModule{}
