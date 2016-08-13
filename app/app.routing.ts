import { Routes, RouterModule } from '@angular/router';

import { CardsComponent } from './cards.component';
import { DashboardComponent } from './dashboard.component';
import { CardDetailComponent } from './card-detail.component';

const appRoutes:Routes = [
    {
        path: '',
        redirectTo: '/dashboard',
        pathMatch: 'full'
    },
    {
        path: 'cards',
        component: CardsComponent
    },
    {
        path: 'dashboard',
        component: DashboardComponent
    },
    {
        path: 'detail/:id',
        component: CardDetailComponent
    }
];

export const routing = RouterModule.forRoot(appRoutes);
