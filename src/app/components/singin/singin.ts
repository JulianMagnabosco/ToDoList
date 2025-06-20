import {
  Component,
  inject,
  OnInit,
  Signal,
  signal,
  WritableSignal,
} from '@angular/core';
import { AuthService } from '../../services/auth-service';
import { User } from '@angular/fire/auth';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-singin',
  imports: [ReactiveFormsModule],
  templateUrl: './singin.html',
  styleUrl: './singin.css',
})
export class Singin implements OnInit {
  service = inject(AuthService);
  user: WritableSignal<User | null> = signal(null);
  form = new FormGroup({
    username: new FormControl(''),
    password: new FormControl(''),
  });
  error: any;

  ngOnInit(): void {
    this.service.auth.onAuthStateChanged((user) => {
      this.user.set(user);
      console.log(user);
    });
  }

  submit() {
    throw new Error('Method not implemented.');
  }

  async login() {
    try {
      await this.service.signInWithGoogle().then((value: any) => {
        console.log(value);
      });
    } catch (error) {
      alert('Ocurrio un error');
    }
  }
}
