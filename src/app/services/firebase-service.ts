import { inject, Injectable } from '@angular/core';
import { Auth } from '@angular/fire/auth';
import { addDoc, collection, collectionData, deleteDoc, doc, DocumentReference, Firestore, getDoc, getDocs, orderBy, query, updateDoc, where } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {
  firestore = inject(Firestore);
  auth = inject(Auth);

  notesColl = collection(this.firestore,"notes");
  notes = collectionData(this.notesColl, { idField: 'id' });

  notesCollOrdered = query(this.notesColl,orderBy("completed","asc"),orderBy("datetime","desc"));
  notesOrdered  = collectionData(this.notesCollOrdered, { idField: 'id' })

  get getAllNotes(){
    const user = this.auth.currentUser;
    if(!user?.uid) return;
    const q = query(this.notesColl,where("uid","==",user.uid),orderBy("completed","asc"),orderBy("datetime","desc"))
    const c = collectionData(q, { idField: 'id' });
    // c.subscribe({next(value) {
    //   console.log(value)
    // },})
    return c;
  }

  addNote(data:any){
    const user = this.auth.currentUser;
    if(!user) return;
    data.uid = user.uid;
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
