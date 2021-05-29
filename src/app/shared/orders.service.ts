import { Injectable } from '@angular/core';
import { AngularFirestore} from '@angular/fire/firestore';
import * as firebase from 'firebase';

@Injectable({
  providedIn: 'root'
})
export class OrdersService {

  constructor(private _fire: AngularFirestore) { }

  saveData(data = {}){
    return this._fire.collection('orders').doc().set({
      ...data, timestamp: firebase.default.firestore.FieldValue.serverTimestamp()
    })
  }

  getData(){
    return this._fire.collection('orders').snapshotChanges();
  }

  deleteData(docId: any){
    return this._fire.collection('orders').doc(docId).delete()
  }

  updateData(docId:any, data = {} ){
    return this._fire.collection('orders').doc(docId).update({
      ...data, timestamp: firebase.default.firestore.FieldValue.serverTimestamp()
    })
  }

}
