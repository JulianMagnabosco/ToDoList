import { Component, ElementRef, inject, OnInit, signal, ViewChild } from '@angular/core';
import { AuthService } from '../../services/auth-service';
import { AsyncPipe } from '@angular/common';
import { FirebaseService } from '../../services/firebase-service';
import { FormsModule } from '@angular/forms';
import { addDoc, collectionData, doc, getDocs, Timestamp } from '@angular/fire/firestore';

@Component({
  selector: 'app-notes',
  imports: [FormsModule],
  templateUrl: './notes-component.html',
  styleUrl: './notes-component.css'
})
export class NotesComponent implements OnInit{
  service=inject(FirebaseService)

  newNoteTitle="" 
  selectedNote:any;
  listNotes=signal<any[]>([])

  @ViewChild('dialog') dialog!: ElementRef;

  ngOnInit(): void {
    // this.service.notesOrdered.subscribe({next(value) {
    //   console.log(value)
    // },})
    // this.service.notes.subscribe({next(value) {
    //   console.log(value)
    // },})
    this.getNotes()
  }

  getNotes(){
    this.service.getAllNotes?.subscribe({next: (value) => {
      console.log(value)
      this.listNotes.set(value)
    },})
    return this.service.getAllNotes;
  }

  addNote(){
    const newNote = {
      datetime: Timestamp.fromDate(new Date()),
      title: this.newNoteTitle,
      completed: false
    }
    this.service.addNote(newNote)
  }

  checkNote(note:any){
    if(note["completed"]) {
      this.dialog.nativeElement.showModal();
      this.selectedNote=note
      return;
    }
    this.service.updateNote(note["id"],{completed: true})
    
  }

  deleteNote(){
    this.service.deleteNote(this.selectedNote["id"]);
    this.dialog.nativeElement.close();
  }
}
