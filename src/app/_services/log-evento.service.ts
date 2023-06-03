import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { LogEventoDtoItem } from '../_models/LogEventosModels/LogEventoDtoItem';
import { AccountService } from './account.service';
import { ToastService } from './toast.service';

@Injectable({
  providedIn: 'root'
})
export class LogEventoService {
 
 

  baseUrl = environment.apiUrl;

  constructor(private http: HttpClient,
    private accountService: AccountService,
  ) { }

  getLastEvento(selection: number) {

    var token = this.accountService.getToken();
    console.log("token getUnidades", token)

    const httpOptions = {
      headers: new HttpHeaders({
        'Authorization': 'Bearer ' + token
      }),
    }
    return this.http.get<LogEventoDtoItem>(this.baseUrl + "LogEvento/getLastEventoFromUnidad/"+ selection);

  }


  getReporteActualEventos(selection: number) {
    return this.http.get<LogEventoDtoItem[]>(this.baseUrl + "LogEvento/getReporteActualEventos/" + selection);

  }

}
