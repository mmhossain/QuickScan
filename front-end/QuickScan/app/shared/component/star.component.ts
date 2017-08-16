import { Component, OnChanges, Input,
         Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'ssc-star',
    moduleId: module.id,
    templateUrl: '../template/star.component.html',
    styleUrls: ['../style/star.component.css']
})
export class StarComponent implements OnChanges {
    @Input() rating: number;
    starWidth: number;
    @Output() ratingClicked: EventEmitter<string> = new EventEmitter<string>();
    
    ngOnChanges(): void {
        this.starWidth = this.rating * 86/5;
    }

    onClick(): void {
        this.ratingClicked.emit(`The rating ${this.rating} was clicked`);
    }
}