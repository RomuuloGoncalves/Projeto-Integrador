import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ToastService } from 'src/app/services/toast.service';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.page.html',
  styleUrls: ['./cadastro.page.scss'],
})
export class CadastroPage implements OnInit {

  @ViewChild('cadastroForm') private cadastoForm!: NgForm;

  constructor(private Usuario: UsuarioService, private Toast: ToastService) { }
  erros: any = {};
  loading: boolean = false;

  ngOnInit() {
  }

  public cadastrar() {
    this.loading = true;
    const usuario = this.cadastoForm.form.value;
    console.log(usuario)
    this.Usuario.cadastrarDados(usuario).subscribe(
      response => {
        console.log('Dados cadastrados com sucesso!', response);
        this.loading = false;
        const tipo = 'success';
        const mensagem = 'Cadastro realizado com sucesso';
        this.Toast.mostrarToast(tipo, mensagem);
      },
      error => {
        console.error('Erro ao cadastrar os dados:', error);
        this.loading = false;

        const tipo = 'danger';
        const mensagem = 'Algo deu errado!';
        this.Toast.mostrarToast(tipo, mensagem);
      }
    );

  }
}