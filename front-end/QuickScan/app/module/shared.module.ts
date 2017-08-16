import { NgModule }  from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { StarComponent } from '../shared/component/star.component';
import { DropdownComponent } from '../shared/component/dropdown.component';
import { GenreSortPipe } from '../shared/pipe/genre-orderby.pipe';
import { CategorySortPipe } from '../shared/pipe/category-orderby.pipe';

@NgModule({
  imports: [ CommonModule],
  exports : [
    CommonModule,
    FormsModule,
    BrowserModule,
    StarComponent,
    DropdownComponent,
    GenreSortPipe,
    CategorySortPipe
  ],
  declarations: [ 
    StarComponent,
    DropdownComponent,
    GenreSortPipe,
    CategorySortPipe
  ]
})
export class SharedModule { }