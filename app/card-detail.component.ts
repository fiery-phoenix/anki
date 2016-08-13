import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import { Card } from './card'
import { CardService } from './card.service';

@Component({
    selector: 'card-detail',
    templateUrl: 'app/card-detail.component.html',
    styleUrls: ['app/card-detail.component.css']
})
export class CardDetailComponent implements OnInit {

    card:Card;

    constructor(private cardService:CardService, private route:ActivatedRoute) {
    }

    ngOnInit() {
        this.route.params.forEach((params:Params) => {
            let id = +params['id'];
            this.cardService.getCard(id).then(card => this.card = card);
        });
    }

    goBack() {
        window.history.back();
    }
}
