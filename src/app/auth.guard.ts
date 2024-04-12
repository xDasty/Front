import { CanActivateFn, Router, ActivatedRouteSnapshot, RouterStateSnapshot,CanActivate } from '@angular/router';
import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';
import { LoginComponent } from './login/login.component';

@Injectable({
  providedIn: 'root'
})

export class AuthGuard implements CanActivate {

  constructor(private authService: AuthService, private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    if (this.authService.isAuth()) {
      return true;
    } else {
      this.router.navigate(['/login']); // Redirige al componente de inicio de sesión si el usuario no está autenticado
      return false;
    }
  }
}