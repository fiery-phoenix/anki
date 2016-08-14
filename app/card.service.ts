import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';

import { Card } from './card'

@Injectable()
export class CardService {

    private cardsUrl = 'app/cards';  // URL to web api

    constructor(private http:Http) {
    }

    getCards() {
        return this.http.get(this.cardsUrl)
            .toPromise()
            .then(response => response.json().data as Card[])
            .catch(this.handleError);
    }

    getCard(id:number) {
        return this.getCards().then(cards => cards.find(card => card.id === id));
    }

    save(card:Card):Promise<Card> {
        if (card.id) {
            return this.put(card);
        }
        return this.post(card);
    }

    delete(card:Card) {
        let url = `${this.cardsUrl}/${card.id}`;

        return this.http
            .delete(url, this.getHeaders())
            .toPromise()
            .catch(this.handleError);
    }

    private post(card:Card):Promise<Card> {
        return this.http
            .post(this.cardsUrl, JSON.stringify(card), this.getHeaders())
            .toPromise()
            .then(res => res.json().data)
            .catch(this.handleError);
    }

    private put(card:Card) {
        let url = `${this.cardsUrl}/${card.id}`;

        return this.http
            .put(url, JSON.stringify(card), this.getHeaders())
            .toPromise()
            .then(() => card)
            .catch(this.handleError);
    }

    private getHeaders() {
        return {headers: new Headers({'Content-Type': 'application/json'})};
    }

    private handleError(error:any) {
        console.error('An error occurred', error);
        return Promise.reject(error.message || error);
    }
}
