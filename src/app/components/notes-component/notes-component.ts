import { Component, inject, OnInit, signal } from '@angular/core';
import { AuthService } from '../../services/auth-service';
import { AsyncPipe } from '@angular/common';
import { FirebaseService } from '../../services/firebase-service';
import { FormsModule } from '@angular/forms';
import { addDoc, collectionData, doc, getDocs, Timestamp } from '@angular/fire/firestore';

@Component({
  selector: 'app-notes',
  imports: [AsyncPipe,FormsModule],
  templateUrl: './notes-component.html',
  styleUrl: './notes-component.css'
})
export class NotesComponent implements OnInit{
  service=inject(FirebaseService)

  newNoteTitle="" 

  ngOnInit(): void {
    // this.service.notesOrdered.subscribe({next(value) {
    //   console.log(value)
    // },})
    // this.service.notes.subscribe({next(value) {
    //   console.log(value)
    // },})
  }

  getNotes(){
    return this.service.notesOrdered
  }

  addNote(){
    const newNote = {
      datetime: Timestamp.fromDate(new Date()),
      title: this.newNoteTitle,
      completed: false
    }
    this.service.addNote(newNote)
  }

  async checkNote(note:any){
    if(note["completed"]) return
    console.log(this.service.notesColl)
    await this.service.updateNote(note["id"],{completed: true})
    
  }
}
