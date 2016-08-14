import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';

// Imports for loading & configuring the in-memory web api
import { HttpModule, XHRBackend } from '@angular/http';
import { InMemoryBackendService, SEED_DATA } from 'angular2-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';

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
        routing,
        HttpModule
    ],
    declarations: [
        AppComponent,
        CardsComponent,
        DashboardComponent,
        CardDetailComponent
    ],
    providers: [
        CardService,
        { provide: XHRBackend, useClass: InMemoryBackendService }, // in-memory server
        { provide: SEED_DATA,  useClass: InMemoryDataService }     // in-memory server data
    ],
    bootstrap: [ AppComponent ]
})
export class AppModule { }
