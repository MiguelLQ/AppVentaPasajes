import { HttpClient } from "@angular/common/http";
import { inject, Injectable } from "@angular/core";
import { Observable, catchError, throwError } from "rxjs";
import { environment } from "src/environments/environment.prod";
import { Iusuario } from "./Iusuario";

@Injectable({
  providedIn: 'root'
})
export class usuarioService {
  constructor() { }

  private http = inject(HttpClient);
  private urlBase: string = environment.apiURL + '/Usuario';

  getUsuario(): Observable<Iusuario[]> {
    return this.http.get<Iusuario[]>(this.urlBase).pipe(
      catchError((error) => {
        console.error('❌ Error al obtener usuarios desde la API:', error);
        return throwError(() => new Error('Error al cargar los usuarios. Intente más tarde.'));
      })
    );
  }
}
