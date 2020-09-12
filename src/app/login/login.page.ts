import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { NavController, MenuController } from '@ionic/angular';
import { TemplateService } from '../service/template.service';
import { AngularFireAuth } from '@angular/fire/auth';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  formGroup: FormGroup;

  constructor(private formBuilder: FormBuilder,
    private auth: AngularFireAuth,
    private navCtrl: NavController,
    private menuCtrl: MenuController,
    private template: TemplateService
  ) {
    this.iniciarForm();
  }

  ngOnInit() {
  }



  autenticar() {

    let user = this.formGroup.controls['username'].value;
    let pass = this.formGroup.controls['password'].value;

    this.template.loading.then(load => {


      //load.present();

      this.auth.signInWithEmailAndPassword(user, pass).then(data => {
        load.dismiss();
        this.menuCtrl.enable(true);
        this.navCtrl.navigateRoot(['clientes']);

      }).catch(data => {
        load.dismiss();
        this.template.myAlert("Erro ao autenticar");
      });
    })
  }

  iniciarForm() {
    this.formGroup = this.formBuilder.group({
      username: ['', [Validators.email]],
      password: ['', [Validators.required, Validators.minLength(13), Validators.maxLength(16)]]
    })
  }

}
