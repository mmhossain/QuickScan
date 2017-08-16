import { NgModule } from '@angular/core';
import { RouterModule} from '@angular/router';

import { BrowseQuestionComponent } from '../browse-question/component/browse-question.component';
import { CategoryListComponent } from '../shared/component/category-list.component';
import { QuestionListComponent } from '../browse-question/component/question-list.component';
import { QuestionComponent } from '../browse-question/component/question.component';
import { AddQuestionComponent } from '../manage-question/component/add-question.component';
import { ManageQuestionComponent } from '../manage-question/component/manage-question.component';
import { SearchQuestionComponent } from '../manage-question/component/search-question.component';
import { CategoryDropdownComponent } from '../shared/component/category-dropdown.component';
import { SharedModule } from '../module/shared.module';

@NgModule({
  imports: [
    SharedModule,
    RouterModule
  ],
  declarations: [
    BrowseQuestionComponent,
    CategoryListComponent,
    QuestionListComponent,
    QuestionComponent,
    AddQuestionComponent,
    ManageQuestionComponent,
    SearchQuestionComponent,
    CategoryDropdownComponent
  ]
})
export class QuestionModule {}