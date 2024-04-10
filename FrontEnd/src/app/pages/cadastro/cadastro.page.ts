import { Component, OnInit } from '@angular/core';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.page.html',
  styleUrls: ['./cadastro.page.scss'],
})
export class CadastroPage implements OnInit {


  constructor(private Usuario: UsuarioService) { }
  erros: any = {};
  loading: boolean = false;

  ngOnInit() {
  }

  public cadastrar() {
    this.loading = true;
    // const usuario = this.cadastoForm.form.value;
    const usuario = {
      nome: "teste",
      email: "teste@teste.com",
      telefone: 981045269,
      senha: "teste"
    }

    console.log(usuario)


    this.Usuario.cadastrarDados(usuario).subscribe(
      response => {
        console.log('Dados cadastrados com sucesso!', response);
      },
      error => {
        console.error('Erro ao cadastrar os dados:', error);
      }
    );

  }
}