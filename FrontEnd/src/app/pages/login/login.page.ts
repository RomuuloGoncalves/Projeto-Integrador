import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { ToastService } from 'src/app/services/toast.service';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  @ViewChild('loginForm') private loginForm!: NgForm;

  constructor(
    private Usuario: UsuarioService,
    private Toast: ToastService,
    private router: Router,
    private Cookie: CookieService,
  ) { }
  erros: any = {};
  loading: boolean = false;

  ngOnInit() {
  }

  public login() {
    this.loading = true;
    const usuario = this.loginForm.form.value;
    console.log(usuario)
    this.Usuario.login(usuario).subscribe(
      (response: any) => {
        console.log(response)
        this.erros = {};
        if (response.token) {
          const dataExpCookie = new Date();
          dataExpCookie.setDate(dataExpCookie.getDate() + 15);
          this.Cookie.set('token', response.token, {
            expires: dataExpCookie,
          });

          this.Cookie.set('nome_usuario', response.nome, {
            expires: dataExpCookie,
          });

          this.Cookie.set('id_usuario', response.id_usuario, {
            expires: dataExpCookie,
          });

          this.loginForm.reset();
          this.router.navigate(['/']);
          setTimeout(() => {
            location.reload();
          }, 200);
          this.Toast.mostrarToast('success', 'Login realizado com sucesso');
        }

        this.loading = false;
      },

      error => {
        console.error('Erro ao cadastrar os dados:', error);
        this.loading = false;

        const tipo = 'danger';
        const mensagem = error.error.message;
        this.Toast.mostrarToast(tipo, mensagem);
      }
    )
  }

}
