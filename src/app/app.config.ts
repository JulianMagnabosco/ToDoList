import { ApplicationConfig, provideBrowserGlobalErrorListeners, provideZonelessChangeDetection } from '@angular/core';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyD-xB31VNMJti-UYErH42JPbsLWtOIO4Uo",
  authDomain: "notas-d78c2.firebaseapp.com",
  projectId: "notas-d78c2",
  storageBucket: "notas-d78c2.firebasestorage.app",
  messagingSenderId: "64510309389",
  appId: "1:64510309389:web:ba0fd585a2660a70585144",
  measurementId: "G-CHKTNLGF82"
};

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZonelessChangeDetection(),
    provideFirebaseApp(()=>initializeApp(firebaseConfig)),
    provideFirestore(()=>getFirestore()),
    provideAuth(()=>getAuth())
  ]
};
