import { CanActivateFn, Router } from '@angular/router';
import { DataService } from '../service/data.service';
import { inject } from '@angular/core';

export const authGuard: CanActivateFn = (route, state) => {
  const service = inject(DataService);
  const router = inject(Router);

  if (service.loggedInUser()) {
    return true;
  } else {
    router.navigateByUrl('/login');
    return false;
  }

  return true;
};
