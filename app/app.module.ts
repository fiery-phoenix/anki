import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';

import { routing }        from './app.routing';

import { AppComponent }  from './app.component';
import { CardsComponent } from './cards.component'
import { DashboardComponent } from './dashboard.component';
import { CardDetailComponent } from './card-detail.component';

import { CardService } from './card.service';

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        routing
    ],
    declarations: [
        AppComponent,
        CardsComponent,
        DashboardComponent,
        CardDetailComponent
    ],
    providers: [
        CardService
    ],
    bootstrap: [ AppComponent ]
})
export class AppModule { }
