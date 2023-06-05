
import { user } from './../../_models/user';
import { UnidadDtoShort } from './../../_models/UnidadModels/unidadDtoShort';
import { Component, OnInit } from '@angular/core';
import { UnidadesService } from '../../_services/unidades.service';
import { ToastController } from '@ionic/angular';
@Component({
  selector: 'app-unidades',
  templateUrl: './unidades.page.html',
  styleUrls: ['../tabs.page.scss'],
})
export class UnidadesPage implements OnInit {

  user!: string;
  token!: string;
  _unidades: UnidadDtoShort[]=[];
  _unidadesFiltered: UnidadDtoShort[]=[];
  activo: boolean = true;
  public loaded = false;

  constructor(private unidadesService: UnidadesService,
    private toastController: ToastController,
  ) { }

  ngOnInit() {
    this.getUnidades()
  }

  getUnidades() {
    this.unidadesService.getUnidades().subscribe(unidades => {
      this._unidades = unidades;
      this.filterUnidades()
      console.log("unidades.ts", this._unidades)
      this.loaded = true;
    }
    );
  }

  filterUnidades() {
    this._unidadesFiltered = this._unidades.filter(unidad => unidad.operacion === this.activo)
    console.log(this.activo, (this._unidadesFiltered.length))
    this.presentToast('top')
    this.loaded = true;
  }


  async presentToast(position: 'top' | 'middle' | 'bottom') {


    var Message = "Mostrando Unidades Activas"
    if (this.activo == false) {
      Message = "Mostrando Unidades fuera de operacion"

    }
    const toast = await this.toastController.create({
      message: Message,
      duration: 1000,
      position: position
    });

    await toast.present();
  }


}
