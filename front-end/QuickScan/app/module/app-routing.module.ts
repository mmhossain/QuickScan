import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { WelcomeComponent } from '../home/component/welcome.component';

@NgModule({
    imports: [
        RouterModule.forRoot([
            { path: 'welcome', component: WelcomeComponent },
            { path: '', redirectTo: 'welcome', pathMatch: 'full' },
            { path: '**', redirectTo:'welcome', pathMatch: 'full' }
        ], { useHash: true })
    ],
    exports: [ RouterModule ]
})
export class AppRoutingModule { }