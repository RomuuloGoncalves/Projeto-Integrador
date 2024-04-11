import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class ServerService {
  private apiUrl = 'http://localhost/Projeto-Integrador/System';

  constructor(private http: HttpClient, private Cookie: CookieService) { }

  public post(path: string, data: any | null, url: string = this.apiUrl): Observable<any> {
    const token = this.Cookie.get('token');
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    });

    return this.http.post(`${url}${path}`, JSON.stringify(data), { headers });
    return this.http.post(`${url}${path}`, JSON.stringify(data));
  }

  public get(path: string, url: string = this.apiUrl): Observable<any> {
    const token = this.Cookie.get('token');
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    });

    return this.http.get(`${url}${path}`, { headers });
  }
}
