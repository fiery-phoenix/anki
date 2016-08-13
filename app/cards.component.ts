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

    constructor(private router:Router, private cardService:CardService) {
    }

    setCards() {
        this.cardService.getCards().then(cards => this.cards = cards);
    }

    onSelect(card) {
        this.selectedCard = card;
    }

    ngOnInit() {
        this.setCards();
    }

    gotoDetail() {
        this.router.navigate(['/detail', this.selectedCard.id]);
    }
}
