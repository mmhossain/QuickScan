import {Component, Input, Output, OnInit, EventEmitter } from '@angular/core';

import { IGenreAndCategory } from '../../model/genre-and-category';
import { IGenre } from '../../model/genre';
import { ICategory } from '../../model/category';
import { CategoryService } from '../../service/category.service';

@Component({
    moduleId: module.id,
    selector: 'category-list',
    templateUrl: '../template/category-list.component.html',
    styleUrls: [ '../style/category-list.component.css' ]
})
export class CategoryListComponent implements OnInit {
    errorMessage: string;
    genres: IGenre[];
    genreAndCategories: IGenreAndCategory[];
    selectedGenreAndCategory: IGenreAndCategory;
    @Input() selectedCategoryId: string;

    @Output() categoryClicked: EventEmitter<string> = new EventEmitter<string>();
    
    constructor(private _categoryService: CategoryService) { }

    setGenreAndCategory(genreAndCategories: IGenreAndCategory[]): void {
        this.genreAndCategories = genreAndCategories;
        this.onGenreClick(this.genreAndCategories[0]);
    }

    showGenre(genreAndCategory: IGenreAndCategory): boolean {
        return !(genreAndCategory.Genre.GenreId === this.selectedGenreAndCategory.Genre.GenreId);
    }

    onCategoryClick(category: ICategory): void {
        this.selectedCategoryId = category.CategoryId;
        this.categoryClicked.emit(this.selectedCategoryId);
    }

    onGenreClick(genreAndCategory: IGenreAndCategory): void {
        this.selectedGenreAndCategory = genreAndCategory;
        let index = genreAndCategory.Categories.findIndex(cat => cat.CategoryId == this.selectedCategoryId);
        if(index < 0) {
            this.selectedCategoryId = this.selectedGenreAndCategory.Categories[0].CategoryId;
            this.categoryClicked.emit(this.selectedCategoryId);
        }
    }

    ngOnInit(): void {
        this._categoryService.getGenreAndCategories()
            .subscribe(genresAndCategory => this.setGenreAndCategory(genresAndCategory),
                        error => this.errorMessage = <any>error);
    }    
}