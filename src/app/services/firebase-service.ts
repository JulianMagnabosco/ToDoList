import { inject, Injectable } from '@angular/core';
import { addDoc, collection, collectionData, deleteDoc, doc, DocumentReference, Firestore, getDoc, updateDoc } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {
  firestore = inject(Firestore)
  notesColl = collection(this.firestore,"notes")
  notes = collectionData(this.notesColl)

  addNote(data:any){
    addDoc(this.notesColl,data)
  }
  
  getNote(id:any){
    const d = doc(this.notesColl,id)
    return getDoc(d)
  }
  updateNote(id:any,data:any){
    const d = doc(this.notesColl,id)
    updateDoc(d,data)
  }
  deleteNote(id:any){
    const d = doc(this.notesColl,id)
    deleteDoc(d)
  }
}
