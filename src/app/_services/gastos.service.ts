import { ViajeDtoEdit } from './../_models/ViajesModels/viajeDtoEdit';
import { QueryDto } from './../_models/queryDto';
import { GastosDtoList } from 'src/app/_models/GastosModels/GastosDtoList';
import { DepositadoParams } from '../_models/GastosModels/depositadoParams';
import { EventEmitter, Injectable, Output } from '@angular/core';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { GastosDtoNew } from '../_models/GastosModels/GastosDtoNew';
import { GastosDtoPrint } from '../_models/GastosModels/GastosDtoPrint';
import { GastosDtoEdit } from '../_models/GastosModels/GastosDtoEdit';
@Injectable({
  providedIn: 'root'
})
export class GastosService {
  baseUrl = environment.apiUrl;
  @Output() operadorId = new EventEmitter<number>();

  lista: ViajeDtoEdit[];

  constructor(private http: HttpClient) { }

  getValesDeGastos(days: number) {
    return this.http.get<GastosDtoList[]>(this.baseUrl + "Gastos/daysPeriod/" + days);
  }

  getValeDeGastosById(stringid: string) {
    var id = parseInt(stringid);
    return this.http.get<GastosDtoEdit>(this.baseUrl + "Gastos/" + id);
  }
  // getValeDeCombustibleById(stringid: string) {
  //   var id = parseInt(stringid);
  //   return this.http.get<GastosDtoEdit>(this.baseUrl + "Combustible/GetValeById/" + id);
  // }

  registerNewValeDeGastos(ValeDeGastosNueva: GastosDtoNew) {
    return this.http.post(this.baseUrl + 'Gastos/registerNewValeDeGastos/', ValeDeGastosNueva).pipe(map((ValeDeGastos: GastosDtoList) => {
    }))
  }

  updateValeDeGastos(ValeDeGastosUpdate: GastosDtoEdit) {
    return this.http.put(this.baseUrl + 'Gastos/', ValeDeGastosUpdate).pipe(map((ValeDeGastos: GastosDtoEdit) => {
    }))
  }



  deleteValeDeGastos(id: number) {
    return this.http.delete(this.baseUrl + "Gastos/delete/" + id);
  }
  setDepositado(id: number, depositado: boolean) {
    const depositadoParams: DepositadoParams = {
      Id: id,
      Depositado: depositado
    }
    return this.http.put(this.baseUrl + "Gastos/Depositado/", depositadoParams);

  }


  getValeDeGastosPrintById(stringid: string) {
    var id = parseInt(stringid);
    return this.http.get<GastosDtoPrint>(this.baseUrl + "Gastos/GetValePrintById/" + id);
  }


  setOperadorId(operadorId: number) {
    this.operadorId.emit(operadorId);
  }

  getValesDeGastosByOperadorId(id: number, days: number) {
    var today = new Date();
    var daysAgo = new Date();

    daysAgo.setDate(daysAgo.getDate() - days);
    console.log("Today is :" + today);
    console.log(days + " was :" + daysAgo);

    const queryDto: QueryDto = {
      id: id,
      inicio: daysAgo,
      final: today
    }
    return this.http.put<GastosDtoList[]>(this.baseUrl + "Gastos/GetValesDeGastosByOperadorId/", queryDto);

  }

  getValesDeGastosByQuery(query: QueryDto) {

    return this.http.put<GastosDtoList[]>(this.baseUrl + "Gastos/GetValesDeGastosByOperadorId/", query);

  }

}
