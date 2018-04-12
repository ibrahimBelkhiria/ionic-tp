import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import firebase from 'firebase';

var config = {
  apiKey: "AIzaSyCQLwasWC29rvAwySjErchqIdNo3_9oz3w",
  authDomain: "chat-e08dd.firebaseapp.com",
  databaseURL: "https://chat-e08dd.firebaseio.com",
  projectId: "chat-e08dd",
  storageBucket: "chat-e08dd.appspot.com",
  messagingSenderId: "1076859887383"
};
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = HomePage;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
    firebase.initializeApp(config);
  }
}

