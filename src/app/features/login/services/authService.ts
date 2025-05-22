// src/app/core/services/auth.service.ts
import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from "src/environments/environment.prod";

@Injectable({ providedIn: 'root' })
export class AuthService {
  private http = inject(HttpClient);
  private urlBase: string = environment.apiURL + '/Auth'; // Asegúrate que sea la ruta correcta

  login(credentials: { username: string; password: string }): Observable<any> {
    return this.http.post(this.urlBase, credentials);
  }
}
