import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable, from } from 'rxjs';
import { Cliente } from '../model/cliente';

@Injectable({
  providedIn: 'root',
})
export class ClienteService {

  collection: string = 'cliente';
  cliente: Observable<any[]>;

  constructor(private firestore: AngularFirestore,
  ) { }

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

  

atualizar(cliente : Cliente, id : string){
  this.firestore.collection(this.collection)
  .doc(id).update(id)
  .catch((error : any) =>{
    console.log(error);
  })
}

  excluir(id: string): Promise<void> {
    return this.firestore.doc(`cliente/${id}`).delete();
  }

  excluir2(id: string){
     this.firestore.doc(`cliente/${id}`).delete().catch(data=>{
       this.excluir;
     });
  }


}