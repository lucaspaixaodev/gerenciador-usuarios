import { Routes } from '@angular/router';
import { List } from './features/list/components/list';

export const routes: Routes = [
    {
        path: 'list',
        component: List
    },
    {
        path: '',
        redirectTo: 'list',
        pathMatch: 'full'
    }
];
