import { Municipio } from './../_models/UbicacionModels/municipio';
import { estadoMexicano } from './../_models/UbicacionModels/EstadoMexicano';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UbicacionesService {
  baseUrl = environment.apiUrl;

  constructor(private http: HttpClient) { }

  getMunicipios() {
    return this.http.get<Municipio[]>(this.baseUrl + "Ubicacion/municipios");
  }


  getEstados() {
    return this.http.get<estadoMexicano[]>(this.baseUrl + "Ubicacion/estados");
  }

  getMunicipioById(stringid: string) {
    var id = parseInt(stringid);
    // return this.http.get<MunicipioDtoComplete>(this.baseUrl + "Ubicacion/" + id);
  }

  registerNewMunicipio(municipioNew: any) {
    return this.http.post(this.baseUrl + 'Ubicacion/registerNewMunicipio/', municipioNew).pipe(map((Municipio: any) => {
    }))
  }

  updateMunicipio(MunicipioUpdate: any) {
    return this.http.put(this.baseUrl + 'Ubicacion/', MunicipioUpdate).pipe(map((Municipio: any) => {
    }))
  }

  deleteMunicipio(id: number) {
    return this.http.delete(this.baseUrl + "Ubicacion/" + id);
  }


}
