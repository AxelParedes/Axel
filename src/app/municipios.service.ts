import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MunicipiosService {

  private apiUrl = 'https://api.datos.gob.mx/v1/condiciones-atmosfericas';

  constructor(private http: HttpClient) { }

  getMunicipios(): Observable<any> {
    return this.http.get<any>(this.apiUrl).pipe(
      catchError(this.handleError)
    );
  }

  private handleError(error: HttpErrorResponse) {
    console.error('Error al obtener los datos:', error);
    return throwError('Error al obtener los datos. Inténtelo de nuevo más tarde.');
  }
}
