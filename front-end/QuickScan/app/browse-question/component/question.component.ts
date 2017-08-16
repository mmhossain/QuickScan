import { Component, Input } from '@angular/core';

import { IQuestion } from '../../model/question';
import { IOption } from '../../model/option';
import { QuestionService } from '../../service/question.service';

@Component({
    moduleId: module.id,
    selector: 'question',
    templateUrl: '../template/question.component.html',
    styleUrls: [ '../style/question.component.css' ]
})
export class QuestionComponent {
    errorMessage: string;
    @Input() selectedCategoryId: string;
    @Input() question: IQuestion;
    @Input() questionNumber: number;
}