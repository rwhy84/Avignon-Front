import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { EditorModule } from '@tinymce/tinymce-angular';




@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule,



  ],
  exports: [
    CommonModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule,

  ]
})
export class SharedModule { }
