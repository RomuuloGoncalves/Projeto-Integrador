import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class ServerService {
  // private apiUrl = 'http://localhost/Projeto-Integrador/System';
  private apiUrl = 'https://amused-hopelessly-tetra.ngrok-free.app/Projeto-Integrador/System';
  

  constructor(private http: HttpClient, private Cookie: CookieService) { }

  public post(path: string, data: any | null, url: string = this.apiUrl): Observable<any> {
    const token = this.Cookie.get('token');
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      "ngrok-skip-browser-warning": "69420",
      'Authorization': `Bearer ${token}`
    });

    return this.http.post(`${url}${path}`, JSON.stringify(data), { headers });
  }

  public get(path: string, url: string = this.apiUrl): Observable<any> {
    const token = this.Cookie.get('token');
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      "ngrok-skip-browser-warning": "69420",
      'Authorization': `Bearer ${token}`
    });

    return this.http.get(`${url}${path}`, { headers });
  }

  public delete(path: string, url: string = this.apiUrl): Observable<any> {
    const token = this.Cookie.get('token');
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      "ngrok-skip-browser-warning": "69420",
      'Authorization': `Bearer ${token}`
    });

    return this.http.delete(`${url}${path}`, { headers });
  }

  public put(path: string, data: any | null, url: string = this.apiUrl): Observable<any> {
    const token = this.Cookie.get('token');
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      "ngrok-skip-browser-warning": "69420",
      'Authorization': `Bearer ${token}`
    });

    return this.http.put(`${url}${path}`, JSON.stringify(data), { headers });
  }

  public upload(path: string, data: any): Observable<any> {
    const token = this.Cookie.get('token');
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);

    return this.http.post(`${this.apiUrl}${path}`, data, { headers });
  }

  public imagem(imagem:any){
    return (imagem != 'https://ionicframework.com/docs/img/demos/avatar.svg' || imagem.trim() == '' || imagem.trim() == null) ? `${this.apiUrl}/public/uploads/imgs/${imagem}` : 'https://ionicframework.com/docs/img/demos/avatar.svg'
  }
}
