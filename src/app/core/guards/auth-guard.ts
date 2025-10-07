import { inject, NgZone } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthAWS } from '@core/services/authaws';
import { catchError } from 'rxjs';

export const authGuard: CanActivateFn = async (route, state) => {
  const authService = inject(AuthAWS);
  const router = inject(Router);
  const zone = inject(NgZone);

  const user = await authService.getCurrentUser();
  if (user) {
    return true;
  } else {
    zone.run(() => router.navigate(['/login']));
    return false;
  }
};
