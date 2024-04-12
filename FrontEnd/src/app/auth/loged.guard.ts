import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable, catchError, map, of } from 'rxjs';
import { ServerService } from '../services/server.service';
import { CookieService } from 'ngx-cookie-service';
import { ToastService } from '../services/toast.service';
import { HttpErrorResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LogedGuard implements CanActivate {
  constructor(
    private Server: ServerService,
    private router: Router,
    private Cookie: CookieService,
    private Toast: ToastService
  ) {}

  canActivate(): Observable<boolean> {
    return this.Server.get('/login/logar.php').pipe(
      map(
        (response: any) => {
          if (!response.error) return true;

          this.handleError();
          return false;
        }),
        catchError((error: HttpErrorResponse) => {
          this.handleError();
          return of(false);
        })
    );
  }

  private handleError() {
    this.Toast.mostrarToast('danger', 'Para acessar o recurso, deve estar logado!')
    this.router.navigate(['login']);
    this.Cookie.delete('token');
  }
}
