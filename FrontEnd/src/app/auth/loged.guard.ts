import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { catchError, map } from 'rxjs/operators';
import { Observable, of } from 'rxjs';
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
    return this.Server.get(`/login/liberarAcesso.php?token=${this.Cookie.get('token')}`).pipe(
      map(
        (response: any) => {
          if (response.success == 1) return true;

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
    this.Cookie.delete('id_usuario');
    this.Cookie.delete('nome_usuario');
  }
}
