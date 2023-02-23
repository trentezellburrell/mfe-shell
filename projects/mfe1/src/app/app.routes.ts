import { Routes } from '@angular/router';

export const APP_ROUTES: Routes = [
    {
        path: '',
        loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule),
    }
];
