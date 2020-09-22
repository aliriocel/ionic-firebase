import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable, from, observable } from 'rxjs';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { AngularFireStorage } from '@angular/fire/storage';
import { UtilService } from './util.service';
import { FileChooser } from '@ionic-native/file-chooser/ngx';
import { File } from '@ionic-native/file/ngx';
import { WebView } from '@ionic-native/ionic-webview/ngx';


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
    private fireStorage : AngularFireStorage,
    private fileChooser: FileChooser,
    private file: File,
    private webview : WebView,
    private util : UtilService) { }

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
  });

  obterFotoArquivo = new Observable((observe)=>{
    this.fileChooser.open({"mime":"image/jpeg"}).then(uri=>{

      this.file.resolveLocalFilesystemUrl(uri).then((data : any)=>{
 
       //amostra a foto na tela
       observe.next(this.webview.convertFileSrc(data.nativeURL));
 
       // Ler o arquivo a partir da uri gerado pelo resolveLocalFilesystemUrl
       data.file(file=>{
 
         var reader = new FileReader();
         reader.onloadend = (encodedFile : any)=>{
           var fileFinal = encodedFile.target.result;
           this.fotoBlob = fileFinal;           
           //Envia a imagem para o firebase
         // this.fotoBlob = this.util.dataUriToBlob(fileFinal);    
         }
         reader.readAsDataURL(file);
       });     
       // Fim ler arquivo 
      }).catch(e=>observe.next(e));
     })
  })

  uploadFoto(nome): Observable<any> {

    let fotoBlob = this.util.dataUriToBlob(this.fotoBlob);
    let observable = from(
      this.fireStorage.storage.ref().child(`/perfil/${nome}.jpg`).put(fotoBlob));
    return observable;
  }

}