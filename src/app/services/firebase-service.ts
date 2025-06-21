import { inject, Injectable } from '@angular/core';
import { addDoc, collection, collectionData, deleteDoc, doc, DocumentReference, Firestore, getDoc, getDocs, orderBy, query, updateDoc, where } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {
  firestore = inject(Firestore);
  notesColl = collection(this.firestore,"notes");
  notes = collectionData(this.notesColl, { idField: 'id' });
  notesCollOrdered = query(this.notesColl,orderBy("completed","asc"),orderBy("datetime","desc"));
  notesOrdered  = collectionData(this.notesCollOrdered, { idField: 'id' })

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
