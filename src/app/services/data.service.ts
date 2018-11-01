import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import * as firebase from 'firebase';
import { Item } from '../models/Item';
import 'rxjs/add/operator/map';
import { areIterablesEqual } from '@angular/core/src/change_detection/change_detection_util';

@Injectable()
export class DataService {

  airCollection:AngularFirestoreCollection<Item>
  air: Observable<Item[]>;
  airDoc:AngularFirestoreDocument<Item>;

  fanCollection:AngularFirestoreCollection<Item>
  fan: Observable<Item[]>;

  onedoorrefrigeratorsCollection:AngularFirestoreCollection<Item>
  onedoorrefrigerators: Observable<Item[]>;

  twodoorrefrigeratorsCollection:AngularFirestoreCollection<Item>
  twodoorrefrigerators: Observable<Item[]>

  waterheatersCollection:AngularFirestoreCollection<Item>
  waterheaters: Observable<Item[]>

  washingmachinesCollection:AngularFirestoreCollection<Item>
  washingmachines: Observable<Item[]>



  

  constructor(private afs: AngularFirestore) {
    const firestore = firebase.firestore();
    const settings = {/* your settings... */ timestampsInSnapshots: true};
    firestore.settings(settings);

    this.airCollection = this.afs.collection('air',ref => ref.orderBy('price','asc'))
    this.air = this.airCollection.snapshotChanges().map(changes =>{
      return changes.map(a => {
        const data = a.payload.doc.data() as Item;
        data.id =a.payload.doc.id;
         return data;
       })
     })
    
    this.fanCollection = this.afs.collection('fan')
    this.fan = this.fanCollection.snapshotChanges().map(changes =>{
      return changes.map(a => {
        const data = a.payload.doc.data() as Item;
        data.id =a.payload.doc.id;
         return data;
       })
     })
    
    this.onedoorrefrigeratorsCollection = this.afs.collection('onedoorrefrigerators')
    this.onedoorrefrigerators = this.onedoorrefrigeratorsCollection.snapshotChanges().map(changes =>{
      return changes.map(a => {
        const data = a.payload.doc.data() as Item;
        data.id =a.payload.doc.id;
         return data;
       })
     })

    this.twodoorrefrigeratorsCollection = this.afs.collection('twodoorrefrigerators')
    this.twodoorrefrigerators = this.twodoorrefrigeratorsCollection.snapshotChanges().map(changes =>{
      return changes.map(a => {
        const data = a.payload.doc.data() as Item;
        data.id =a.payload.doc.id;
         return data;
       })
     })

    this.waterheatersCollection = this.afs.collection('waterheaters')
    this.waterheaters = this.waterheatersCollection.snapshotChanges().map(changes =>{
      return changes.map(a => {
        const data = a.payload.doc.data() as Item;
        data.id =a.payload.doc.id;
         return data;
       })
     })

    this.washingmachinesCollection = this.afs.collection('washingmachines')
    this.washingmachines = this.washingmachinesCollection.snapshotChanges().map(changes =>{
      return changes.map(a => {
        const data = a.payload.doc.data() as Item;
        data.id =a.payload.doc.id;
         return data;
       })
     })

   }
  getAirs(){
    return this.air;
  }
  addAirs(item: Item){
    return this.airCollection.add(item)
  }
  getFan(){
    return this.fan;
  }
  addFans(item: Item){
    return this.fanCollection.add(item)
  }
  getOnedoorrefrigerators(){
    return this.onedoorrefrigerators
  }
  addOnedoorrefrigerators(item: Item){
    return this.onedoorrefrigeratorsCollection.add(item)
  }
  getTwodoorrefrigerators(){
    return this.twodoorrefrigerators
  }
  addTwodoorrefrigerators(item: Item){
    return this.twodoorrefrigeratorsCollection.add(item)
  }
  getWaterheaters(){
    return this.waterheaters
  }
  addWaterheaters(item: Item){
    return this.waterheatersCollection.add(item)
  }
  getWashingmachines(){
    return this.washingmachines
  }
  addWashingmachines(item: Item){
    return this.washingmachinesCollection.add(item)
  }
  

  updateItem(itemid: Item){
    this.airDoc = this.afs.doc(`air/${itemid.id}`);
    this.airDoc.update(itemid);
  }

}
