import { Injectable } from '@angular/core';
import { CARDS } from './mock-cards';
import { Card } from './card'

@Injectable()
export class CardService {
    getCards() {
        return Promise.resolve(CARDS);
    }

    getCardsSlowly() {
        return new Promise<Card[]>(resolve =>setTimeout(() => resolve(CARDS), 2000));
    }

    getCard(id:number) {
        return this.getCards().then(cards => cards.find(card => card.id === id));
    }
}
