import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { SharedModule } from '../shared-module/shared.module';
import { AddProductComponent } from './add-product.component';
import {MatSelectModule} from '@angular/material/select';
import { NumberOnlyDirective } from '../directives/number-only.directives';

const homeRoutes: Route[] = [
    {
        path     : '',
        component: AddProductComponent
    }
];

@NgModule({
    declarations: [
        AddProductComponent,
        NumberOnlyDirective
    ],
    imports     : [
      SharedModule,
      MatSelectModule,
      CommonModule,
      RouterModule.forChild(homeRoutes),
    ],
    exports: []
})
export class AddProductModule{}
