import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Card } from './card';
import { CardService } from './card.service';

@Component({
    selector: 'cards',
    templateUrl: 'app/cards.component.html',
    styleUrls: ['app/cards.component.css']
})

export class CardsComponent implements OnInit {

    cards:Card[];
    selectedCard:Card;
    addingCard = false;
    error:any;

    constructor(private router:Router, private cardService:CardService) {
    }

    setCards() {
        this.cardService.getCards().then(cards => this.cards = cards).catch(error => this.error = error);
    }

    onSelect(card) {
        this.selectedCard = card;
        this.addingCard = false;
    }

    ngOnInit() {
        this.setCards();
    }

    gotoDetail() {
        this.router.navigate(['/detail', this.selectedCard.id]);
    }

    addCard() {
        this.addingCard = true;
        this.selectedCard = null;
    }

    close(savedCard:Card) {
        this.addingCard = false;
        if (savedCard) {
            this.setCards();
        }
    }

    deleteCard(card:Card, event:any) {
        event.stopPropagation();
        this.cardService
            .delete(card)
            .then(res => {
                this.cards = this.cards.filter(h => h !== card);
                if (this.selectedCard === card) {
                    this.selectedCard = null;
                }
            })
            .catch(error => this.error = error);
    }
}
