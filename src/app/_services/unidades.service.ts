import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, JsonpInterceptor } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { UnidadDtoShort } from '../_models/UnidadModels/unidadDtoShort';
import { user } from '../_models/user';
import { AccountService } from './account.service';
import { UnidadDtoComplete } from '../_models/UnidadModels/unidadDtoComplete';
import { UnidadDDL } from '../_models/UnidadModels/unidadDDL';

@Injectable({
  providedIn: 'root'
})
export class UnidadesService {

  baseUrl = environment.apiUrl;

  constructor(private http: HttpClient,
    private accountService: AccountService) { }



  _unidades: UnidadDtoShort[] = [];

  getUnidades() {

    return this.http.get<UnidadDtoShort[]>(this.baseUrl + "Unidad");
  }

  getUnidadesDDL() {
    return this.http.get<UnidadDDL[]>(this.baseUrl + "Unidad/UnidadesDDL");
  }



  getUnidadById(id: number) {


    var token = this.accountService.getToken();
    console.log("token getUnidades", token)

    // Construct headers // Pasar a Interceptor
    const httpOptions = {
      headers: new HttpHeaders({
        'Authorization': 'Bearer ' + token
      }),
    }

    return this.http.get<UnidadDtoComplete>(this.baseUrl + "Unidad/" + id, httpOptions);
  }


}


