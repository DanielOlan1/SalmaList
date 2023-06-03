import { Cliente } from './../_models/ClientesModels/cliente';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs';
import { ClienteDDL } from '../_models/ClientesModels/clienteDDL';

@Injectable({
  providedIn: 'root'
})
export class ClientesService {
  baseUrl = environment.apiUrl;
  // @Output() operadorId = new EventEmitter<number>();

  constructor(private http: HttpClient) { }

  registerNewCliente(cliente: Cliente) {
    return this.http.post(this.baseUrl + 'Cliente/RegisterNewCliente/', cliente).pipe(map((cliente: Cliente) => {
    }))
  }

  deleteCliente(id: number) {
    return this.http.delete(this.baseUrl + "Cliente/delete/" + id);
  }

  getClientes() {
    return this.http.get<Cliente[]>(this.baseUrl + "Cliente/");

  }

  getClientesDDL() {
    return this.http.get<ClienteDDL[]>(this.baseUrl + "Cliente/ClientesDDL");

  }


}
