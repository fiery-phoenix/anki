import { Component, Input } from '@angular/core';
import { Card } from './card'

@Component({
    selector: 'card-detail',
    template: `
        <div *ngIf="card">
            <h2>{{card.name}} details!</h2>
            <div><label>id: </label>{{card.id}}</div>
            <div>
                <label>name: </label>
                <input [(ngModel)]="card.name" placeholder="name">
            </div>
        </div>
    `
})
export class CardDetailComponent {
    @Input()
    card: Card;
}
