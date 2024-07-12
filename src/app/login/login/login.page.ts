import { Component, OnInit } from '@angular/core';
import { AutenticacaoService } from 'src/app/service/autenticacao.service';
import { Router } from '@angular/router';
import { MenuController, ToastController} from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {

  public email: string="";
  public senha: string="";
  public mensagem: string="";
  public userEmail: string="";

  constructor(
    private menu: MenuController,
    public autenticacaoService: AutenticacaoService,
    public router: Router,
    public toastController: ToastController
  ) {}

  loginUsuario() {
    this.autenticacaoService.loginNoFirebase(this.email, this.senha)
    .then((res) => {
      this.router.navigate(['/home']);
    }).catch((error) => {
      this.mensagem = "E-mail ou senha incorreto(s)";
      this.exibeMensagem();
    })
  }
  
  recoverPassword(){
    this.autenticacaoService.novaSenha(this.email)
    .then((res) => {
      this.mensagem = "E-mail de recuperação enviado";
      this.exibeMensagem();
    }).catch((error) => {
      this.mensagem = "E-mail não encontrado";
      this.exibeMensagem();
    })
  }

  async exibeMensagem(){
    const toast = await this.toastController.create({
      message: this.mensagem,
      duration: 2500
    });
    toast.present();
  }


  ionViewWillEnter() {
    this.menu.enable(false, 'first');
  }
  
  ionViewDidLeave() {
    this.menu.enable(true, 'first');
  }
  
  ngOnInit() {
  }

}
