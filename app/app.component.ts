import { Component } from '@angular/core';
export class Card {
    id: number;
    name: string;
}
@Component({
selector: 'my-app',
template: `
        <h1>{{title}}</h1>
        <h2>{{card.name}} details!</h2>
        <div><label>id: </label>{{card.id}}</div>
        <div>
            <label>name: </label>
            <input [(ngModel)]="card.name" placeholder="name">
        </div>
    `
})
export class AppComponent {
title = 'Anki';
card: Card = {
id: 1,
name: 'Java'
}
}
