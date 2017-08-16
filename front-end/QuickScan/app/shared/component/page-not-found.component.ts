import { Component } from '@angular/core';

@Component({
    template: `
        <div>
            {{message}}
        </div>
    `
})
export class PageNotFoundComponent {
    message: string = 'Woop! Sorry, the resource not found.';
}