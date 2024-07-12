import { Component } from '@angular/core';

import { AlertController } from '@ionic/angular';
import { Router,NavigationEnd } from '@angular/router';

import { StatusBar,Style } from '@capacitor/status-bar';

//swiper v
import { register } from 'swiper/element/bundle'
register();
//swiper ^
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {

  pages: any;
  showMenu:boolean = true;

  public alertButtons = [

    {
      text: 'Sim',
      cssClass: 'alert-button-confirm',
      role: 'sim',
    },
    {
      text: 'Não',
      cssClass: 'alert-button-cancel',
    }
  ];

  constructor(private alertController: AlertController, private router: Router) {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.updateMenuVisibility(event.url);
      }
    });
  }

  updateMenuVisibility(url: string) {
    const hiddenRoutes = ['/login', '/register'];
    this.showMenu = !hiddenRoutes.includes(url);
  }

  
  async exibirAlerta() {
    const alert = await this.alertController.create({
      header: 'Deseja Sair?',
      buttons: this.alertButtons,
      cssClass: 'custom-alert',
    });

    await alert.present();

    const result = await alert.onDidDismiss();
    if (result.role === 'sim') {
      this.router.navigateByUrl('/login');
    }
  }
   
  
}
