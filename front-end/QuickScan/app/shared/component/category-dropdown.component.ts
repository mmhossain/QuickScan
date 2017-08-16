import {Component, Input, Output, OnInit, EventEmitter } from '@angular/core';

import { IGenreAndCategory } from '../../model/genre-and-category';
import { IGenre } from '../../model/genre';
import { ICategory } from '../../model/category';
import { CategoryService } from '../../service/category.service';

@Component({
    moduleId: module.id,
    selector: 'category-dropdown',
    templateUrl: '../template/category-dropdown.component.html',
    styleUrls: [ '../style/category-dropdown.component.css' ]
})
export class CategoryDropdownComponent implements OnInit {
    errorMessage: string;
    genres: IGenre[];
    genreAndCategories: IGenreAndCategory[];
    
    constructor(private _categoryService: CategoryService) { }

    setGenreAndCategory(genreAndCategories: IGenreAndCategory[]): void {
        this.genreAndCategories = genreAndCategories;
    }

    ngOnInit(): void {
        this._categoryService.getGenreAndCategories()
            .subscribe(genresAndCategory => this.setGenreAndCategory(genresAndCategory),
                        error => this.errorMessage = <any>error);
    }    
}