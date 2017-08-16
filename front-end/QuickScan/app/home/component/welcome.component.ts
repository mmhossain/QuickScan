import { Component } from '@angular/core';

@Component({
    moduleId: module.id,
    templateUrl: '../template/welcome.component.html',
    styleUrls: [ '../style/welcome.component.css' ]
})
export class WelcomeComponent {
    public pageTitle: string = 'Welcome';
}
