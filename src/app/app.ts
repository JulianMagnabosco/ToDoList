import { Component } from '@angular/core';
import { Singin } from "./components/singin/singin";
import { NotesComponent } from "./components/notes-component/notes-component";

@Component({
  selector: 'app-root',
  imports: [Singin, NotesComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'todolist';
}
