import { Component } from '@angular/core';
export class Card {
    id: number;
    name: string;
}
@Component({
selector: 'my-app',
template: `
        <h1>{{title}}</h1>
        <h2>Available cards</h2>
        <ul class="cards">
          <li *ngFor="let card of cards" [class.selected]="card === selectedCard" (click)="onSelect(card)">
            <span class="badge">{{card.id}}</span> {{card.name}}
          </li>
        </ul>
        <div *ngIf="selectedCard">
            <h2>{{selectedCard.name}} details!</h2>
            <div><label>id: </label>{{selectedCard.id}}</div>
            <div>
                <label>name: </label>
                <input [(ngModel)]="selectedCard.name" placeholder="name">
            </div>
        </div>
    `,
    styles: [`
        .selected {
          background-color: #CFD8DC !important;
          color: white;
        }
        .cards {
          margin: 0 0 2em 0;
          list-style-type: none;
          padding: 0;
          width: 15em;
        }
        .cards li {
          cursor: pointer;
          position: relative;
          left: 0;
          background-color: #EEE;
          margin: .5em;
          padding: .3em 0;
          height: 1.6em;
          border-radius: 4px;
        }
        .cards li.selected:hover {
          background-color: #BBD8DC !important;
          color: white;
        }
        .cards li:hover {
          color: #607D8B;
          background-color: #DDD;
          left: .1em;
        }
        .cards .text {
          position: relative;
          top: -3px;
        }
        .cards .badge {
          display: inline-block;
          font-size: small;
          color: white;
          padding: 0.8em 0.7em 0 0.7em;
          background-color: #607D8B;
          line-height: 1em;
          position: relative;
          left: -1px;
          top: -4px;
          height: 1.8em;
          margin-right: .8em;
          border-radius: 4px 0 0 4px;
        }
`]
})

export class AppComponent {
    title = 'Anki';
    selectedCard:Card;
    public cards = CARDS;
    onSelect(card) {
        this.selectedCard = card;
    }
}

const CARDS: Card[] = [
    { id: 1, name: 'Java' },
    { id: 2, name: 'JavaScript' },
    { id: 3, name: 'Scala' },
    { id: 4, name: 'Akka' },
    { id: 5, name: 'JUnit' },
    { id: 6, name: 'Angular' },
    { id: 7, name: 'Vert.x' },
    { id: 8, name: 'Hibernate' },
    { id: 9, name: 'Spring' },
    { id: 10, name: 'AssertJ' }
];
