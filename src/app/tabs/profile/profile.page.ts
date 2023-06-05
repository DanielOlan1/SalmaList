import { user } from './../../_models/user';
import { Component, OnInit } from '@angular/core';
import { AccountService } from '../../_services/account.service';
import { AlertController, ToastController } from '@ionic/angular';
import { Member } from 'src/app/_models/member';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['../tabs.page.scss'],
})
export class ProfilePage implements OnInit {


  constructor(private accountService: AccountService,
    private alertCtrl: AlertController,
    public toastController: ToastController) {
  }

  ngOnInit() {

  }
  logout() {
    this.accountService.logout()
  }
  async roles() {
    const user = this.accountService.getUser();
    const rolesList = user.roles.map(role => `<li>${role}</li>`).join('');
    const alert = await this.alertCtrl.create({
      header: 'ROLES ASIGNADOS',
      mode: 'ios',
      subHeader: `Los roles asignados a ${user.username} son:`,
      message: `<ol>${rolesList}</ol>`,
    });
    await alert.present();
    const { role } = await alert.onDidDismiss();
  }


  async ToggleToastop(message: string) {
    const alert = await this.alertCtrl.create({
      header: 'Dark Mode',
      mode: 'ios',
      subHeader: 'Cambiaste',
      message: `<p>${message}</p>`,
    });

    await alert.present();
  }

  async userComments() {
    const alert = await this.alertCtrl.create({
      header: 'Enviar sugerencias',
      mode: 'ios',
      inputs: [
        {
          name: 'name',
          type: 'text',
          placeholder: 'Nombre'
        },
        {
          name: 'email',
          type: 'email',
          placeholder: 'Correo electrónico'
        },
        {
          name: 'comment',
          type: 'textarea',
          placeholder: 'Escribe tus sugerencias aquí...'
        }
      ],
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            console.log('Cancelado');
          }
        },
        {
          text: 'Enviar',
          handler: (data) => {
            console.log('Enviado', data);
            // Lógica para enviar sugerencias
          }
        }
      ]
    });

    await alert.present();
  }




}

