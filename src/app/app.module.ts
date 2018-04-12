import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule, AngularFireDatabase } from 'angularfire2/database';
import { MessageProvider } from '../providers/message/message';


export const firebaseConfig = {
  apiKey: "AIzaSyCQLwasWC29rvAwySjErchqIdNo3_9oz3w",
  authDomain: "chat-e08dd.firebaseapp.com",
  databaseURL: "https://chat-e08dd.firebaseio.com",
  projectId: "chat-e08dd",
  storageBucket: "chat-e08dd.appspot.com",
  messagingSenderId: "1076859887383"
};



@NgModule({
  declarations: [
    MyApp,
    HomePage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AngularFireDatabase,
    MessageProvider
  ]
})
export class AppModule {}
