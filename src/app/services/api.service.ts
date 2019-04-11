,import { Injectable } from '@angular/core';
import { AngularFirestore,AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs/internal/Observable';
import { ProductosInterface } from '../models/productos';
//import { ProductosInterface } from '../models/productos';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
 
  constructor(private afs: AngularFirestore) {
    this.productsCollection =
    afs.collection<ProductosInterface>('productos');
    this.productos =
    this.productsCollection.valueChanges()

   }
   private productsCollection:
   AngularFirestoreCollection<productosInterface>
   private productos: Observable<ProductosInterface[]>

   get productos(){
     return this.productos
   }
   
}
