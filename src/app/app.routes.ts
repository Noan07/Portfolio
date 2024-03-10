import { Routes } from '@angular/router';

export const routes : Routes = [
    {
        path: '',
        children:  [
            {
                path: 'portfolio',
                loadChildren: () => import('./features/portfolio/portfolio.module').then(m => m.PortfolioModule),
            },
            {
                path: '',
                redirectTo: 'portfolio', pathMatch: 'full'
            }
        ]
    }
];
