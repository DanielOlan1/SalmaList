import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { OperadorDDL } from '../_models/OperadorModels/operadorDDL';
import { OperadorDtoComplete } from '../_models/OperadorModels/operadorDtoComplete';
import { OperadorDtoShort } from '../_models/OperadorModels/operadorDtoShort';
import { AccountService } from './account.service';

@Injectable({
  providedIn: 'root'
})
export class OperadoresService {
  getOperadoresDDL() {
    return this.http.get<OperadorDDL[]>(this.baseUrl + "Operador/OperadoresDDL");
  }

  baseUrl = environment.apiUrl;

  constructor(private http: HttpClient,
    private accountService: AccountService) { }

  _operador: OperadorDtoShort[] = [];

  getOperadores() {


    var token = this.accountService.getToken();
    console.log("token getOperadores", token)

    // Construct headers // Pasar a Interceptor
    const httpOptions = {
      headers: new HttpHeaders({
        'Authorization': 'Bearer ' + token
      }),
    }

    return this.http.get<OperadorDtoShort[]>(this.baseUrl + "Operador", httpOptions);
  }

  




  getOperadorById(id: number) {
    var token = this.accountService.getToken();
    console.log("token getOperador", token)

    // Construct headers // Pasar a Interceptor
    const httpOptions = {
      headers: new HttpHeaders({
        'Authorization': 'Bearer ' + token
      }),
    }
    return this.http.get<OperadorDtoComplete>(this.baseUrl + "Operador/" + id, httpOptions);
  }


}


