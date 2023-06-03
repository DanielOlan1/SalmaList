import { CombustibleDtoEdit } from 'src/app/_models/CombustibleModels/CombustibleDtoEdit';
import { EventEmitter, Injectable, Output } from '@angular/core';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { CombustibleDtoList } from '../_models/CombustibleModels/CombustibleDtoList';
import { CombustibleDtoPrint } from '../_models/CombustibleModels/CombustibleDtoPrint';
import { DepositadoParams } from '../_models/GastosModels/depositadoParams';
import { CombustibleDtoNew } from '../_models/CombustibleModels/CombustibleDtoNew';
import { QueryDto } from '../_models/queryDto';
@Injectable({
  providedIn: 'root'
})
export class CombustibleService {
  baseUrl = environment.apiUrl;
  @Output() operadorId = new EventEmitter<number>();

  constructor(private http: HttpClient) { }

  getValesDeCombustible(days: number) {
    return this.http.get<CombustibleDtoList[]>(this.baseUrl + "Combustible/" + days);
  }

  getValeDeCombustibleById(stringid: string) {
    var id = parseInt(stringid);
    return this.http.get<CombustibleDtoEdit>(this.baseUrl + "Combustible/GetValeById/" + id);
  }

  getValeDeCombustiblePrintById(stringid: string) {
    var id = parseInt(stringid);
    return this.http.get<CombustibleDtoPrint>(this.baseUrl + "Combustible/GetValePrintById/" + id);
  }


  registerNewValeDeCombustible(ValeDeCombustibleNueva: CombustibleDtoNew) {
    return this.http.post(this.baseUrl + 'Combustible/registerNewValeDeCombustible/', ValeDeCombustibleNueva).pipe(map((ValeDeCombustible: CombustibleDtoList) => {
    }))
  }

  updateValeDeCombustible(ValeDeCombustibleUpdate: CombustibleDtoEdit) {
    return this.http.put(this.baseUrl + 'Combustible/', ValeDeCombustibleUpdate).pipe(map((ValeDeCombustible: CombustibleDtoEdit) => {
    }))
  }

  deleteValeDeCombustible(id: number) {
    return this.http.delete(this.baseUrl + "Combustible/delete/" + id);
  }
  
  setDepositado(id: number, depositado: boolean) {
    const depositadoParams: DepositadoParams = {
      Id: id,
      Depositado: depositado
    }
    return this.http.put(this.baseUrl + "Combustible/Depositado/", depositadoParams);

  }

  setOperadorId(operadorId: number) {
    // console.log(operadorId)
    this.operadorId.emit(operadorId);

  }
  getValesDeCombustibleByOperadorId(id: number, days: number) {
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
    return this.http.put<CombustibleDtoList[]>(this.baseUrl + "Combustible/GetValesDeCombustibleByOperadorId/", queryDto);

  }

  getValesDeCombustibleByQuery(query: QueryDto) {

    return this.http.put<CombustibleDtoList[]>(this.baseUrl + "Combustible/GetValesDeCombustibleByOperadorId/", query);

  }
}
