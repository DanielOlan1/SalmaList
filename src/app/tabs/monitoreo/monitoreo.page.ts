import { Component, OnInit } from '@angular/core';
import { LogEventoDtoItem } from 'src/app/_models/LogEventosModels/LogEventoDtoItem';
import { LogEventoService } from 'src/app/_services/log-evento.service';

@Component({
  selector: 'app-monitoreo',
  templateUrl: './monitoreo.page.html',
  styleUrls: ['./monitoreo.page.scss'],
})
export class MonitoreoPage implements OnInit {
  LogEventosItem: LogEventoDtoItem[] = [];
  public loaded = false;
   constructor(
    private logEventoService: LogEventoService
  ) { }

  ngOnInit() {
    this.getReporteActualEventos();

  }

  getReporteActualEventos() {
      this.logEventoService.getReporteActualEventos(1).subscribe(LogEventosItem => {
        this.LogEventosItem = LogEventosItem;
        console.log("monitoreo.ts", this.LogEventosItem);
        this.loaded = true;
     });
  }


  getClienteClass(evento: LogEventoDtoItem): string {
    if (evento.cliente === 'PEMEX') {
      return 'purpleColor';
    } else if (evento.cliente === 'OILDOZER') {
      return 'orangeColor';
    } else if (evento.cliente === 'KOCH SUPPLY') {
      return 'greenColor';
    } else if (evento.cliente === 'JOSE GUADALUPE') {
      return 'creamColor';
    } else if (evento.cliente === 'ICI LOWIN') {
      return 'darkBlueColor';
    } else if (evento.cliente === 'KOCH-ENERGEX') {
      return 'tealColor';
    } else if (evento.cliente === 'CAMPER') {
      return 'yellowColor';
    } else if (evento.cliente === 'ENERGEX') {
      return 'maroonColor';
    } else if (evento.cliente === 'TREE FUELS') {
      return 'ligthblueColor';
    } else if (evento.cliente === 'AMCA') {
      return 'wineColor';
    } else if (evento.cliente === 'WOLF') {
      return 'grayColor';
    }
    return '';
  }

}
