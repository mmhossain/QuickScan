import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, RequestMethod, Request, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';

import { ICategory } from '../model/category';
import { IQuestion } from '../model/question';

@Injectable()
export class QuestionService {

    private _questionUrl = './app/asset/api/question/question-feed-csharp.json';
    private _categoryApiUrl = 'http://localhost:25624/api/categories/v1';
    private _questionApiUrl = 'http://localhost:25624/api/questions/v1';

    constructor(private _http: Http) { }

    getQuestions(categoryId: string): Observable<IQuestion[]> {
        
        let url = './app/asset/api/question/question-feed-' + categoryId + '.json';

        return this._http.get(url)
            .map((response: Response) => <IQuestion[]>response.json())
            //.do(data => console.log('All: ' + JSON.stringify(data)))
            .catch(this.handleError);
    }

    getCategories(): Observable<ICategory[]> {
        return this._http.get(this._categoryApiUrl + '/allcategories')
            .map((response: Response) => <ICategory[]>response.json())
            .do(data => console.log('All: ' + JSON.stringify(data)))
            .catch(this.handleError);
    }

    saveQuestion(question: IQuestion): Observable<IQuestion> {
        let options = new RequestOptions({ 
            method: RequestMethod.Post,
            headers: new Headers({ 'Content-Type': 'application/json' }),
            body: JSON.stringify(question),
            url: this._questionApiUrl + '/savequestion',
            withCredentials: false
        });

        return this._http.request(new Request(options))
            .map((response: Response) => <IQuestion>response.json())
            .do(data => console.log('All: ' + JSON.stringify(data)))
            .catch(this.handleError);
    }

    // saveQuestion(question: IQuestion):  Observable<IQuestion> {
    //     let headers = new Headers();
    //     headers.append('Content-Type', 'application/json' );
    //     let url = this._questionApiUrl + '/savequestion';
    //     let q = { 'CategoryId': 'csharp' };
    //     let body = JSON.stringify(question);
    //     let jsonBody = body.substring(1, body.length - 1);

    //     return this._http.get('/questionsbycategory/csharp')
    //         .map((response: Response) => <IQuestion>response.json());
    // }

    getCategoryByCategory(categoryId: string): Observable<ICategory[]> {
        return this._http.get(this._categoryApiUrl + '/getcategorybyid/' + categoryId)
            .map((response: Response) => <ICategory[]>response.json())
            .do(data => console.log('All: ' + JSON.stringify(data)))
            .catch(this.handleError);
    }

    private handleError(error: Response) {
        console.error(error);
        return Observable.throw(error.json().error || 'Server error');
    }
}