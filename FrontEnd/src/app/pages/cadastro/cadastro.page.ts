import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { MaskService } from 'src/app/services/mask.service';
import { ToastService } from 'src/app/services/toast.service';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.page.html',
  styleUrls: ['./cadastro.page.scss'],
})
export class CadastroPage implements OnInit {

  @ViewChild('cadastroForm') private cadastoForm!: NgForm;

  constructor(private Usuario: UsuarioService, private Toast: ToastService, public Mask: MaskService, private router: Router) { }
  mascaraTelefone: any = this.Mask.mascaraTelefone
  maskPredicate: any = this.Mask.maskPredicate

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

        this.cadastoForm.reset();
        this.router.navigate(['/login']);
        setTimeout(() => {
          location.reload();
        }, 200);
        this.Toast.mostrarToast('success', 'Login realizado com sucesso');
      },
      error => {
        console.error('Erro ao cadastrar os dados:', error);
        this.loading = false;

        const tipo = 'danger';
        const mensagem = error.error.message;
        this.Toast.mostrarToast(tipo, mensagem);
      }
    );

  }
}