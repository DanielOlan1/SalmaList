import { HttpClient } from "@angular/common/http";
import { EventEmitter, Injectable, Output } from "@angular/core";
import { environment } from "src/environments/environment";
import { QueryDto } from "../_models/queryDto";
import { ViajeDtoEdit } from "../_models/ViajesModels/viajeDtoEdit";
import { ViajeDtoList } from "../_models/ViajesModels/viajeDtoList";
import { ViajeDtoNew } from "../_models/ViajesModels/viajeDtoNew";
import { ViajeUnidadDto } from "../_models/ViajesModels/viajeUnidadDto";

@Injectable({
  providedIn: 'root'
})
export class ViajesService {
  registerNewViaje(newViaje: ViajeDtoNew) {
    throw new Error('Method not implemented.');
  }
  
  baseUrl = environment.apiUrl;
  @Output() operadorId = new EventEmitter<number>();

  constructor(private http: HttpClient) { }



  getViajeById(stringid: string) {
    var id = parseInt(stringid);
    return this.http.get<ViajeDtoEdit>(this.baseUrl + "Viaje/" + id);
  }

  getViajeById1(id: number) {
    return this.http.get<ViajeDtoList>(this.baseUrl + "Viaje/" + id);
  }

  getViajesByOperadorId(id: number, days: number) {
    var today = new Date();
    var daysAgo = new Date();

    daysAgo.setDate(daysAgo.getDate() - days);
    console.log("Today is :" + today);
    console.log(days + " was :" + daysAgo);

    const queryDto: QueryDto = {
      id: id,
      final: today
    }

    return this.http.put<ViajeDtoList[]>(this.baseUrl + "Viaje/GetViajesByOperadorId/", queryDto);

  }


  getViajes(days: number, clienteId: number) {

    const queryDto: QueryDto = {
      days: days, clienteId: clienteId,


    }
    return this.http.put<ViajeDtoList[]>(this.baseUrl + "Viaje/GetViajesByQuery/", queryDto);

  }

  setOperadorId(operadorId: number) {
    this.operadorId.emit(operadorId);
  }

  getLastViajesOfUnidades() {

    return this.http.get<ViajeUnidadDto[]>(this.baseUrl + "Viaje/LastViajesOfUnidades");
  }


}