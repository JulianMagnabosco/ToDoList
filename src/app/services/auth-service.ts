import { inject, Injectable } from '@angular/core';
import { Auth, AuthModule, createUserWithEmailAndPassword, GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup } from '@angular/fire/auth';
import { Firestore } from '@angular/fire/firestore';
import { signOut } from '@firebase/auth';
import firebase from 'firebase/compat/app';

export interface User {
  email: string;
  password: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  firestore = inject(Firestore)
  auth = inject(Auth)
  
  signUp(user: User) {
    return createUserWithEmailAndPassword(
      this.auth,
      user.email,
      user.password
    );
  }

  signIn(user: User) {
    return signInWithEmailAndPassword(
      this.auth, 
      user.email, 
      user.password
    );
  }

  signInWithGoogle() {
    const provider = new GoogleAuthProvider();

    // provider.setCustomParameters({ prompt: 'select_account' });

    return signInWithPopup(this.auth, provider);
  }

  signOut() {
    return signOut(
      this.auth
    );
  }
}
