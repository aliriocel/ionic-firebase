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


}