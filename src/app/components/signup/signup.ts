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
  selector: 'app-signup',
  imports: [ReactiveFormsModule],
  templateUrl: './signup.html',
  styleUrl: './signup.css'
})
export class Signup implements OnInit {
  service = inject(AuthService);
  user: WritableSignal<User | null> = signal(null);
  form = new FormGroup({
    email: new FormControl('',[Validators.required,Validators.email]),
    password: new FormControl('',[Validators.required]),
    password2: new FormControl('',[Validators.required]),
  });
  error: any;

  toLoginEvent = output<void>()
  toNoteEvent = output<void>()

  ngOnInit(): void {
    this.service.auth.onAuthStateChanged((user) => {
      this.user.set(user);
      if(user){
        this.toNoteEvent.emit();
      }
    });
  }

  async signIn() {
    if (this.form.invalid) return;
    console.log("click")

    try {
      const { email, password, password2 } = this.form.value;

      if (!email || !password || !password2) return;

      await this.service.signUp({ email, password });

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
