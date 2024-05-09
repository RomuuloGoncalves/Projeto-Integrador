import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { MaskitoElementPredicate, MaskitoOptions } from '@maskito/core';
import { CookieService } from 'ngx-cookie-service';
import { MaskService } from 'src/app/services/mask.service';
import { ToastService } from 'src/app/services/toast.service';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-atualizar-perfil',
  templateUrl: './atualizar-perfil.component.html',
  styleUrls: ['./atualizar-perfil.component.scss'],
})
export class AtualizarPerfilComponent implements OnInit {

  @ViewChild('atualizarForm') private atualizarForm!: NgForm;
  @Input() public nome?: any;
  @Input() public email!: any;
  @Input() public id_usuario!: any;
  @Input() public senha!: any;
  @Input() public telefone!: any;


  constructor(private Usuario: UsuarioService, private Toast: ToastService, private router: Router, private Cookie: CookieService, public Mask: MaskService) { }

  mascaraTelefone: any = this.Mask.mascaraTelefone
  maskPredicate: any = this.Mask.maskPredicate

  erros: any = {};
  loading: boolean = false;

  ngOnInit() {
  }

  public cadastrar() {
    this.loading = true;
    const usuario = this.atualizarForm.form.value;
    console.log(usuario)
    this.Usuario.atualizarDados(usuario).subscribe(
      response => {
        this.loading = false;
        const tipo = 'success';
        const mensagem = 'Atualizado realizado com sucesso';
        this.Toast.mostrarToast(tipo, mensagem);

        const dataExpCookie = new Date();
        dataExpCookie.setDate(dataExpCookie.getDate() + 15)
        this.Cookie.delete('nome_usuario');

        this.Cookie.set('nome_usuario', usuario.nome, {
          expires: dataExpCookie,
        });

        this.atualizarForm.reset();
        this.router.navigate(['/perfil']);
        setTimeout(() => {
          location.reload();
        }, 200);
      },

      error => {
        console.error('Erro ao atualizar os dados:', error);
        this.loading = false;

        const tipo = 'danger';
        const mensagem = 'Algo deu errado!';
        this.Toast.mostrarToast(tipo, mensagem);
      }
    );

  }
}
