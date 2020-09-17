import { Injectable } from '@angular/core';


// Transforma foto em código GLOBE para enviar arquivo em formato HTTP


@Injectable({
    providedIn: 'root',
  })
  export class UtilService {

    constructor(){}

    dataUriToBlob(dataURI) {
        var byteString = atob(dataURI.split(',')[1]);
        var mimeString = dataURI.split(',')[0].split(':')[1].split(';')[0]
        var ab = new ArrayBuffer(byteString.length);
        var ia = new Uint8Array(ab);
        for (var i = 0; i < byteString.length; i++) {
            ia[i] = byteString.charCodeAt(i);
        }
        return new Blob([ab], { type: mimeString });
      }
  }