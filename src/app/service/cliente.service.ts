import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable, from, observable } from 'rxjs';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { DomSanitizer } from '@angular/platform-browser';
import { AngularFireStorage } from '@angular/fire/storage';
import { UtilService } from './util.service';


@Injectable({
  providedIn: 'root',
})
export class ClienteService {

  fotoBlob: any = null;

  collection: string = 'cliente';
  cliente: Observable<any[]>;

  constructor(private http: HttpClient,
    private firestore: AngularFirestore,
    private camera: Camera,
    private util : UtilService,
    private fireStorage : AngularFireStorage,) { }

  cadastrar(obj: any): Observable<any> {
    const observable =
      from(this.firestore.collection('cliente').add(obj));
    return observable;
  }

  listar(): Observable<any> {
    return this.firestore.collection(this.collection)
      .snapshotChanges();
  }

  buscaPorId(id: string): Observable<any> {
    return this.firestore.collection
      (this.collection).doc(id).snapshotChanges();
  }

  atualizar(id: string, dados: any): Observable<any> {
    const observable =
      from(this.firestore.collection('cliente').doc(id).set(dados));
    return observable;
  }

  excluir(id: string): Observable<any> {
    const observable =
      from(this.firestore.collection('cliente').doc(`${id}`).delete());
    return observable;
  }


  obterFotoCamera = new Observable((observe) => {

    const options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE,
      correctOrientation: true
    }

    this.camera.getPicture(options).then(imageData => {
      this.fotoBlob = 'data:image/jpeg;base64,' + imageData;
      observe.next('data:image/jpeg;base64,' + imageData);
    }, (err) => {
      observe.error(err);
    })
  })

  uploadFoto(nome): Observable<any> {

    let fotoBlob = this.util.dataUriToBlob(this.fotoBlob);
    let observable = from(
      this.fireStorage.storage.ref().child(`/perfil/${nome}.jpg`).put(fotoBlob));
    return observable;
  }

}