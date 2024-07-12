import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { AutenticacaoService } from 'src/app/service/autenticacao.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  public email: string="";
  public senha: string="";
  public mensagem: string="";

  constructor(
    public autenticacaoService: AutenticacaoService,
    public router: Router,
    public toastController: ToastController
  ) { }

  inserirUsuario(){
    this.autenticacaoService.insereNoFirebase(this.email, this.senha)
    .then((res) =>{
      this.router.navigate(['/login']);
    }).catch((error) => {
      this.mensagem = "Erro ao registrar usuario";
      this.exibeMensagem();
    })
  }
  async exibeMensagem(){
    const toast = await this.toastController.create({
      message: this.mensagem,
      duration: 2000
    });
    toast.present();
  }

  

  ngOnInit() {
  }

}
