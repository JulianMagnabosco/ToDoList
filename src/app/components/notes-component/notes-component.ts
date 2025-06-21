import { Component, inject, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth-service';
import { AsyncPipe } from '@angular/common';
import { FirebaseService } from '../../services/firebase-service';
import { FormsModule } from '@angular/forms';
import { addDoc, doc, getDocs, Timestamp } from '@angular/fire/firestore';

@Component({
  selector: 'app-notes',
  imports: [AsyncPipe,FormsModule],
  templateUrl: './notes-component.html',
  styleUrl: './notes-component.css'
})
export class NotesComponent implements OnInit{
  service=inject(FirebaseService)

  newNoteTitle="" 

  async ngOnInit(): Promise<void> {
    const values = await getDocs(this.service.notesColl);
    values.forEach((v)=>{
      console.log(v)
    })
  }

  getNotes(){
    return this.service.notes
  }

  addNote(){
    const newNote = {
      datetime: Timestamp.fromDate(new Date()),
      title: this.newNoteTitle,
      completed: false
    }
    this.service.addNote(newNote)
  }

  async checkNote(id:any){
    console.log(this.service.notesColl)
    await this.service.updateNote(id,{completed: true})
    
  }
}
