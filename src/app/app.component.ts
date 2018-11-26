import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import * as firebase from 'firebase';

const config = {
  apiKey: "xxx",
  authDomain: "bulletinboard-f8f2e.firebaseapp.com",
  databaseURL: "https://bulletinboard-f8f2e.firebaseio.com",
  projectId: "bulletinboard-f8f2e",
  storageBucket: "bulletinboard-f8f2e.appspot.com",
  messagingSenderId: "877486355896"
};

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
    firebase.initializeApp(config);
  }
}
