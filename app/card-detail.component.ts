import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import { Card } from './card'
import { CardService } from './card.service';

@Component({
    selector: 'card-detail',
    templateUrl: 'app/card-detail.component.html',
    styleUrls: ['app/card-detail.component.css']
})
export class CardDetailComponent implements OnInit {

    @Input() card:Card;
    @Output() close = new EventEmitter();
    error:any;
    navigated = false;

    constructor(private cardService:CardService, private route:ActivatedRoute) {
    }

    ngOnInit() {
        this.route.params.forEach((params:Params) => {
            if (params['id'] !== undefined) {
                let id = +params['id'];
                this.navigated = true;
                this.cardService.getCard(id).then(card => this.card = card);
            } else {
                this.navigated = false;
                this.card = new Card();
            }
        });
    }

    save() {
        this.cardService
            .save(this.card)
            .then(card => {
                this.card = card;
                this.goBack(card);
            })
            .catch(error => this.error = error); // TODO: Display error message
    }

    goBack(savedCard:Card = null) {
        this.close.emit(savedCard);
        if (this.navigated) {
            window.history.back();
        }
    }
}
