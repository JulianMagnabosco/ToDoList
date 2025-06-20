import { Component, inject } from '@angular/core';
import { AuthService } from '../../services/auth-service';
import { AsyncPipe } from '@angular/common';
import { FirebaseService } from '../../services/firebase-service';

@Component({
  selector: 'app-notes',
  imports: [AsyncPipe],
  templateUrl: './notes-component.html',
  styleUrl: './notes-component.css'
})
export class NotesComponent {
  service=inject(FirebaseService)
}
