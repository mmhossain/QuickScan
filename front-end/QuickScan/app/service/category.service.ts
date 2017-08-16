import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { Observable }from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';

import { IGenreAndCategory } from '../model/genre-and-category';
import { IGenre } from '../model/genre';
import { ICategory } from '../model/category';
import { IQuestion } from '../model/question';

@Injectable()
export class CategoryService {

    //private _categoryUrl = './app/asset/api/question/category-feed.json';
    private _categoryUrl = 'http://localhost:25624/api/categories/v1';
    private _questionApiUrl = 'http://localhost:25624/api/questions/v1';

    constructor(private _http: Http) {

    }

    orderGenreByPriority(values: IGenreAndCategory[]): IGenreAndCategory[] {
        values.sort((a: IGenreAndCategory, b: IGenreAndCategory) => {
            
            this.orderCategoryByPriority(a.Categories);
            this.orderCategoryByPriority(b.Categories);

            if (a.Genre.Priority < b.Genre.Priority) {
                return -1;
            } else if (a.Genre.Priority > b.Genre.Priority) {
                return 1;
            } else {
                return 0;
            }
        });

        return values;
    }

    orderCategoryByPriority(values: ICategory[]): ICategory[] {
        values.sort((a: ICategory, b: ICategory) => {
            if (a.Priority < b.Priority) {
                return -1;
            } else if (a.Priority > b.Priority) {
                return 1;
            } else {
                return 0;
            }
        });

        return values;
    }

    // getGenres(): Observable<IGenre[]> {
    //     return this._http.get(this._categoryUrl)
    //         .map((response: Response) => <IGenre[]>response.json().genres)
    //         //.do(data => console.log('All: ' + JSON.stringify(data)))
    //         .catch(this.handleError);
    // }

    getGenreAndCategories(): Observable<IGenreAndCategory[]> {
        return this._http.get(this._categoryUrl + '/allgenreswithcategories')
            .map((response: Response) => this.orderGenreByPriority(<IGenreAndCategory[]>response.json()))
            //.do(data => console.log('All: ' + JSON.stringify(data)))
            .catch(this.handleError);
    }

    getCategories(): Observable<ICategory[]> {
        return this._http.get(this._categoryUrl + '/allcategories')
            .map((response: Response) => <ICategory[]>response.json())
            //.do(data => console.log('All: ' + JSON.stringify(data)))
            .catch(this.handleError);
    }

    saveQuestion(question: IQuestion):  Observable<IQuestion> {
        let headers = new Headers();
        headers.append('Content-Type', 'application/json' );
        let url = this._questionApiUrl + '/savequestion';
        let q = { 'CategoryId': 'csharp' };
        let body = JSON.stringify(question);
        let jsonBody = body.substring(1, body.length - 1);

        return this._http.post(url, {"CategoryId":"csharp"}, { headers: headers })
            .map((response: Response) => <IQuestion>response.json());
    }

    private handleError(error: Response) {
        console.error(error);
        return Observable.throw(error.json().error || 'Server error');
    }
}