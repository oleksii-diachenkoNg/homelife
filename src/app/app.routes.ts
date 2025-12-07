import { Routes } from '@angular/router';

import { Home } from './home/home';
import { Budget } from './budget/budget';
import { NotFound } from './not-found/not-found';

export const routes: Routes = [
    {
        path: '',
        component: Home
    },
    {
        path: 'budget',
        component: Budget,
        // children: [
        //     {
        //         path: '/add-new'
        //     }
        // ]
    },
    {
        path: '**',
        component: NotFound
    }
];
