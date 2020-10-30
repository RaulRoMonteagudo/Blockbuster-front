import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { AlertService } from '../alert/alert.service';
import { Company } from './company';

@Injectable({
  providedIn: 'root'
})
export class CompanyService {

  urlServer: string = 'http://localhost:8090/';
  private httpHeaders = new HttpHeaders({'Content-Type': 'application/json'});
  alertService: any;

  constructor(private http: HttpClient, alertService: AlertService) { }

  getCompanies(): Observable<Company[]>{
    return this.http.get<Company[]>(this.urlServer + 'companies').pipe(
      catchError(e => {
        console.error(`getJuegos error: "${e.message}"`);
        this.alertService.error(`Error al consultar las compañias: "${e.message}"`, {autoClose: true, keepAfterRouteChange: false});
        return throwError(e);
      })
    );
  }
}