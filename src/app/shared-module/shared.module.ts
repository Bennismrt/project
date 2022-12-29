
import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { NgMatIconsModule } from 'ng-mat-icons';


@NgModule({
  imports: [
    RouterModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NgMatIconsModule,
  ],
  exports: [
    CommonModule,
    FormsModule,
    NgMatIconsModule,
    ReactiveFormsModule,
  ],

})
export class SharedModule {}
