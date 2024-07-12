import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';

@Injectable({
  providedIn: 'root'
})
export class AutenticacaoService {

  constructor(public ngFireAuth: AngularFireAuth) { }

  loginNoFirebase(email:any, password:any){
    return this.ngFireAuth.signInWithEmailAndPassword(email, password)
  }

  insereNoFirebase(email:any, password:any){
    return this.ngFireAuth.createUserWithEmailAndPassword(email, password)
  }

  novaSenha(email:any){
    return this.ngFireAuth.sendPasswordResetEmail(email);
  }

}
