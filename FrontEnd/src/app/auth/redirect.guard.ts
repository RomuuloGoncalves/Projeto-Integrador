import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { UsuarioService } from '../services/usuario.service';

@Injectable({
  providedIn: 'root'
})
export class RedirectGuard implements CanActivate {
  constructor(
    private router: Router,
    private Usuario: UsuarioService
  ) {}

  canActivate() {
    if (!this.Usuario.logedIn) return true;

    this.router.navigate([''])
    return false;
  }
}
