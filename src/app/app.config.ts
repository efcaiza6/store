import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import {
  PreloadAllModules,
  provideRouter,
  withComponentInputBinding,
  withPreloading,
} from '@angular/router';

import { routes } from './app.routes';
import { provideHttpClient } from '@angular/common/http';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { provideStorage, getStorage } from '@angular/fire/storage';

const firebaseConfig = {
  apiKey: 'AIzaSyBDZev15pmLOkyHn6RHSrrYEKTBxYom8bo',
  authDomain: 'crud-angular-bc2cf.firebaseapp.com',
  projectId: 'crud-angular-bc2cf',
  storageBucket: 'crud-angular-bc2cf.appspot.com',
  messagingSenderId: '373745988437',
  appId: '1:373745988437:web:02334c6ce8160d0d1635dc',
  measurementId: 'G-8QV2504RKN',
};

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(
      routes,
      withComponentInputBinding(),
      withPreloading(PreloadAllModules)
    ),
    provideHttpClient(),
    provideAnimationsAsync(),
    importProvidersFrom([
      provideFirebaseApp(() => initializeApp(firebaseConfig)),
      provideStorage(() => getStorage()),
    ]),
  ],
};
