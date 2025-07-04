import { Component, inject, signal, WritableSignal } from '@angular/core';
import { NotesComponent } from "./components/notes-component/notes-component";
import { Signin } from "./components/signin/signin";
import { Signup } from "./components/signup/signup";
import { AuthService } from './services/auth-service';

@Component({
  selector: 'app-root',
  imports: [Signin, NotesComponent, Signin, Signup],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'todolist';
  // mode:"register"|"login"|"notes" ="login" 
  mode:WritableSignal<"register"|"login"|"notes"> =signal("register") 

  service=inject(AuthService)
}
