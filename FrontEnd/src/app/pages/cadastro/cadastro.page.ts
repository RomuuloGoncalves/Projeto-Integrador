import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.page.html',
  styleUrls: ['./cadastro.page.scss'],
})
export class CadastroPage implements OnInit {

  @ViewChild('cadastroForm') private cadastoForm!: NgForm;

  constructor(private Usuario: UsuarioService) { }
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
      },
      error => {
        console.error('Erro ao cadastrar os dados:', error);
        this.loading = false;
      }
    );

  }
}