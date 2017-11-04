import { Component } from '@angular/core';
import { ToastController, Toast } from 'ionic-angular';
import { NavController , Alert, Platform} from 'ionic-angular';
import { TabsPage } from '../tabs/tabs';
import { Facebook } from '@ionic-native/facebook';
import {Network} from "@ionic-native/network";


declare var navigator: any;
declare var Connection: any;

@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})


export class LoginPage {
  toast: Toast;
  Connection: any;
  isLoggedIn:boolean = false;
  users: any;

  constructor(public fb: Facebook, public navCtrl: NavController, public toastCtrl: ToastController) {

    fb.getLoginStatus()
      .then(res => {
        console.log(res.status);
        if(res.status === "connect")
          this.isLoggedIn = true;
        else
          this.isLoggedIn = false;
      })
      .catch(e => console.log(e));
  }

  reload() {
    this.navCtrl.push(TabsPage);
  }

  checkNetwork() {
        var networkState = navigator.connection.type;
        var states = {};
        states[Connection.UNKNOWN]  = 'Unknown connection';
        states[Connection.ETHERNET] = 'Ethernet connection';
        states[Connection.WIFI]     = 'WiFi connection';
        states[Connection.CELL_2G]  = 'Cell 2G connection';
        states[Connection.CELL_3G]  = 'Cell 3G connection';
        states[Connection.CELL_4G]  = 'Cell 4G connection';
        states[Connection.CELL]     = 'Cell generic connection';
        states[Connection.NONE]     = 'No network connection';

        if (states[networkState] == states[Connection.NONE]){
          if (this.toast != null)
          this.toast.dismiss();
          this.toast = this.toastCtrl.create({
          message: "Network seems offline. Please check your connection before retry.",
          position: 'middle',
          showCloseButton: true
          });
          this.toast.present();
          return false;
        }
    return true;
}


  onConnect() {
    console.log(this.checkNetwork());
    if (this.checkNetwork()){
      console.log("apparemment ça return true");
      this.fb.login(['public_profile', 'user_friends', 'email'])
        .then(res => {
          if(res.status === "connected") {
            this.isLoggedIn = true;
            this.navCtrl.push(TabsPage);
          } else
            this.isLoggedIn = false;
        })
        .catch(e => console.log('Error logging into Facebook', e));
    }
  }

  logout() {
    this.fb.logout()
      .then( res => this.isLoggedIn = false)
      .catch(e => console.log('Error logout from Facebook', e));
  }
}
