import { Routes } from '@angular/router';

export const routes: Routes = [
    { path: '', loadComponent: () => import('./features/landing/landing') },
    { path: 'login', loadComponent: () => import('./features/login/login') },
    { path: 'register', loadComponent: () => import('./features/register/register') },
];