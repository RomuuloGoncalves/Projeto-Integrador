import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ToastService } from 'src/app/services/toast.service';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent  implements OnInit {

  constructor(private Usuario: UsuarioService, private Toast: ToastService) {}


  ngOnInit() {}
  // logedIn: Boolean = this.Usuario.logedIn;
  logedIn: Boolean = true;
  nome_usuario?: string = this.Usuario.nome_usuario 

  logout() {
    this.Usuario.logout().subscribe(
      (response: any) => {
        console.log(response)
        this.Usuario.limparToken();
        this.Toast.mostrarToast('success', "Deslogado");

        setTimeout(() => {
          location.reload();
        }, 500);
      },
      (badResponse: HttpErrorResponse) => {
        this.Toast.mostrarToast('danger', "Algo deu errado!");
        console.error(badResponse);
      }
    )
  }

}
