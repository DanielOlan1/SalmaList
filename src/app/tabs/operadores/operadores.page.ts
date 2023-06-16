import { Component, OnInit } from '@angular/core';
import { OperadorDtoShort } from 'src/app/_models/OperadorModels/operadorDtoShort';
import { OperadoresService } from 'src/app/_services/operadores.service';

@Component({
  selector: 'app-operadores',
  templateUrl: './operadores.page.html',
  styleUrls: ['./operadores.page.scss'],
})
export class OperadoresPage implements OnInit {
  _operador: OperadorDtoShort[]=[];
  _operadoresFiltered: OperadorDtoShort[]=[];
  activo: boolean = true;

  nombre: string = '';
  apellidoPaterno: string = '';
  apellidoMaterno: string = '';
  vencimientoLicencia: Date = new Date();

  public loaded = false;

  constructor(
    private operadoresService: OperadoresService
  ) { 
    this.nombre = '';
    this.apellidoPaterno = '';
    this.apellidoMaterno = '';
    this.vencimientoLicencia = new Date();
  }

  ngOnInit() {
    this.getOperadores();
  }

  getOperadores() {
    this.operadoresService.getOperadores().subscribe(operador => {
      this._operador = operador;
      console.log("operador.ts", this._operador)
      this.loaded = true;
    }
    );
  }

}
