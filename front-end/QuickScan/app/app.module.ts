import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent }  from './app.component';
import { WelcomeComponent } from './home/component/welcome.component';
import { BrowseQuestionComponent } from './browse-question/component/browse-question.component';
import { QuestionListComponent } from './browse-question/component/question-list.component';
import { AddQuestionComponent } from './manage-question/component/add-question.component';
import { ManageQuestionComponent } from './manage-question/component/manage-question.component';

import { QuestionModule } from './module/question.module';
import { CategoryService } from './service/category.service';
import { QuestionService } from './service/question.service';

@NgModule({
  imports: [
    BrowserModule,
    HttpModule,
    RouterModule.forRoot([
        { path: 'welcome', component: WelcomeComponent },
        { path: 'browse-question', component: BrowseQuestionComponent },
        { path: 'manage-question', component: ManageQuestionComponent },
        { path: 'add-question', component: AddQuestionComponent },
        { path: 'question-list/:categoryId', component: QuestionListComponent },
        { path: '', redirectTo: 'welcome', pathMatch: 'full' },
        { path: '**', redirectTo:'welcome', pathMatch: 'full' }
    ], { useHash: true }),
    QuestionModule
  ],
  declarations: [
    AppComponent,
    WelcomeComponent
  ],
  providers: [
    CategoryService,
    QuestionService
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }