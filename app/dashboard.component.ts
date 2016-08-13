import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'

import { Card } from './card';
import { CardService } from './card.service';

@Component({
    selector: 'cards-dashboard',
    templateUrl: 'app/dashboard.component.html',
    styleUrls: ['app/dashboard.component.css']
})
export class DashboardComponent implements OnInit {

    cards:Card[];

    constructor(private router: Router, private cardService:CardService) {
    }

    ngOnInit() {
        this.cardService.getCards().then(cards => this.cards = cards.slice(0, 4));
    }

    gotoDetail(card:Card) {
        this.router.navigate(['/detail', card.id]);
    }
}
