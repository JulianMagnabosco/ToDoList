import { inject, Injectable } from '@angular/core';
import { collection, collectionData, Firestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {
  firestore = inject(Firestore)
  notesColl = collection(this.firestore,"notes")
  notes = collectionData(this.notesColl)

  constructor() { }
}
