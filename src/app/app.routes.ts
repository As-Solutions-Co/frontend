import { Routes } from '@angular/router';
import { authGuard } from '@core/guards/auth-guard';

export const routes: Routes = [
    { path: '', loadComponent: () => import('./features/landing/landing') },
    { path: 'login', loadComponent: () => import('./features/login/login') },
    { path: 'register', loadComponent: () => import('./features/register/register') },
    {
        path: 'dashboard',
        loadComponent: () => import('./shared/components/dashboard/dashboard'),
        canActivate: [authGuard]
    }
];