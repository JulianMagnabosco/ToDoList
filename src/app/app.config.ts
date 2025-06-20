import { ApplicationConfig, provideBrowserGlobalErrorListeners, provideZonelessChangeDetection } from '@angular/core';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { FIREBASE_OPTIONS } from '@angular/fire/compat';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyD-xB31VNMJti-UYErH42JPbsLWtOIO4Uo",
  authDomain: "notas-d78c2.firebaseapp.com",
  projectId: "notas-d78c2",
  storageBucket: "notas-d78c2.firebasestorage.app",
  messagingSenderId: "64510309389",
  appId: "1:64510309389:web:4841de371057441d585144",
  measurementId: "G-DDFD1YCBEX"
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
