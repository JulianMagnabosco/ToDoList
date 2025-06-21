import {
  Component,
  inject,
  OnInit,
  output,
  signal,
  WritableSignal,
} from '@angular/core';
import { AuthService } from '../../services/auth-service';
import { User } from '@angular/fire/auth';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-signin',
  imports: [ReactiveFormsModule],
  templateUrl: './signin.html',
  styleUrl: './signin.css'
})
export class Signin implements OnInit {
  service = inject(AuthService);
  user: WritableSignal<User | null> = signal(null);
  form = new FormGroup({
    email: new FormControl('',[Validators.required,Validators.email]),
    password: new FormControl('',[Validators.required]),
  });
  error: any;

  toRegisterEvent = output<void>()
  toNoteEvent = output<void>()

  ngOnInit(): void {
    this.service.auth.onAuthStateChanged((user) => {
      if(user){
        this.user.set(user);
        this.toNoteEvent.emit()
      }
    });
  }

  async signIn() {
    if (this.form.invalid) return;
    console.log("click")

    try {
      const { email, password } = this.form.value;

      if (!email || !password) return;

      await this.service.signIn({ email, password });

      this.toNoteEvent.emit()

    } catch (error) {
      alert('Ocurrio un error');
    }
  }

  async signInWithGoogle() {
    try {
      await this.service.signInWithGoogle()
      this.toNoteEvent.emit()

    } catch (error) {
      alert('Ocurrio un error');
    }
  }
}
