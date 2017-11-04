import { Component, ViewChild, ViewChildren, QueryList } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ToastController, Toast } from 'ionic-angular';
import { Facebook } from '@ionic-native/facebook';
import {Network} from "@ionic-native/network";
import 'rxjs/Rx';

import {
  StackConfig,
  Stack,
  Card,
  ThrowEvent,
  DragEvent,
  SwingStackComponent,
  SwingCardComponent
} from 'angular2-swing';

declare var navigator: any;
declare var Connection: any;

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  @ViewChild('myswing1') swingStack: SwingStackComponent;
  @ViewChildren('mycards1') swingCards: QueryList<SwingCardComponent>;

  toast: Toast;
  cards: Array<any>;
  all_friends: Array<any>;
  random_friends: Array<any>;
  stackConfig: StackConfig;
  recentCard: string = '';
  success = 0;
  error = 0;
  total = 0;
  min = 0;
  max = 10;
  cards_index = 0;

  constructor(public fb: Facebook, public navCtrl: NavController, public toastCtrl: ToastController) {
    this.stackConfig = {
         throwOutConfidence: (offsetX, offsetY, element) => {
           return Math.min(Math.abs(offsetX) / (element.offsetWidth/2), 1);
         },
         transform: (element, x, y, r) => {
           this.onItemMove(element, x, y, r);
         },
         throwOutDistance: (d) => {
           return 800;
         }
    };
    this.getFriends();
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
    
    if (states[networkState] == states[Connection.CELL_2G]){
      return 1
    }
    if (states[networkState] == states[Connection.CELL_3G]){
      return 2
    }
    else if (states[networkState] == states[Connection.WIFI] || states[networkState] == states[Connection.CELL_4G] ||  states[networkState] == states[Connection.ETHERNET]){
      return 3;
    }
    
    else {
      if (this.toast != null)
      this.toast.dismiss();
      this.toast = this.toastCtrl.create({
      message: "Network seems offline. Please check your connection before retry.",
      position: 'middle',
      showCloseButton: true
      });
      this.toast.present();
      return 0;
    }
}

  getFriends() {
    console.log("get Friends");
    var connection = this.checkNetwork();
    var request = "";
    if (connection == 0){
     console.log("connexion quality null")
      return -1;
    }
    else if (connection == 1){
      request =  "me/taggable_friends?fields=first_name,last_name,picture.width(100).height(100)&limit=200";
      console.log("connexion quality medium")
    }
    else if (connection == 2){
      request =  "me/taggable_friends?fields=first_name,last_name,picture.width(200).height(200)&limit=5000";
      console.log("connexion quality medium")
    }
    else{
      request =  "me/taggable_friends?fields=first_name,last_name,picture.width(400).height(400)&limit=5000";
      console.log("connexion quality good")
    }
        this.fb.api(request,["user_friends"])
      .then(res => {
        var nb_friends = res.data.length;

        for (var count=0; count < nb_friends; count++) {
          var rand = Math.floor(Math.random() * nb_friends) + 0;
          console.log(rand)
          var val = res.data[rand];
          if (val.url == "https://scontent.xx.fbcdn.net/v/t1.0-1/c29.0.100.100/p100x100/10354686_10150004552801856_220367501106153455_n.jpg?oh=049ecfece14dfe681a2cc083eeaabc6f&oe=5AA0FC77")
            continue;
          this.cards.push(val);
          this.all_friends.push(val.first_name + " " + val.last_name);
        }
        let current = this.cards.slice(this.min, this.max);
        this.random_friends = this.getRandomFriendIncludeOne(this.cards[this.min + current.length - 1].first_name + " " + this.cards[this.min + current.length - 1].last_name);
      }).catch(e => {
        console.log(e);
      });
  }

  getRandomFriendIncludeOne(forced_friends) {
    var randomFriends = new Array(6);

    console.log("Forced Friends : " + forced_friends);
    randomFriends[Math.floor(Math.random() * 6)] = forced_friends;
    for (let i = 0; i < 6; ++i) {
      if (randomFriends[i] == null || randomFriends[i] == "") {
        let f = this.all_friends[Math.floor(Math.random() * this.all_friends.length)];
        if (randomFriends.indexOf(f) == -1)
            randomFriends[i] = f;
          else
            --i;
      }
    }
    return randomFriends;
  }

  ngAfterViewInit() {
    // Either subscribe in controller or set in HTML
    this.swingStack.throwin.subscribe((event: DragEvent) => {
      event.target.style.background = '#ffffff';
    });

    this.cards = [{first_name:'', last_name:''}];
    this.all_friends = [];
    this.random_friends = [];
    this.min = 0;
    this.max = 10;
    this.cards_index = 0;
    //this.addNewCards(1);
  }

  // Called whenever we drag an element
onItemMove(element, x, y, r) {
  var color = '';
  var abs = Math.abs(x);
  let min = Math.trunc(Math.min(16*16 - abs, 16*16));
  let hexCode = this.decimalToHex(min, 2);

  /*if (x < 0) {*/
    color = '#FF' + hexCode + hexCode;
  /*} else {
    color = '#' + hexCode + 'FF' + hexCode;
  }*/

  element.style.background = color;
  element.style['transform'] = `translate3d(0, 0, 0) translate(${x}px, 0px) rotate(${r}deg)`; //replace trnslate: 0px by ${x}
}

presentToast(success :boolean, name) {
    if (this.toast != null)
      this.toast.dismiss();
    if (success)
      ++this.success;
    else
      ++this.error;
    ++this.total;
    this.toast = this.toastCtrl.create({
      message: (success) ? 'Success ! ' + this.success + "/" +this.total : 'It seems you don\'t know! ' + this.success + "/" +this.total+ "\nAnswer was "+name,
      position: 'bottom',
      showCloseButton: true
    });
    this.toast.present();
  }

  updateMinMax() {
    this.min = this.min + 10;
    this.max = this.max + 10;
    console.log("MIN : " + this.min + ",MAX : " + this.max + ",CURRENT : " + this.cards_index );
  }

// Connected through HTML
voteUp(like: boolean, select_friends) {
  var current = this.cards.slice(this.min, this.max);
  let removedCard =this.cards[this.min + current.length - 1];
  this.cards.splice(this.min + current.length - 1, 1);
  let forced = this.cards[this.min + current.length - 1];

  console.log("SELECT : " + select_friends + " REMOVED : " + removedCard.first_name + " " + removedCard.last_name);
  this.random_friends = this.getRandomFriendIncludeOne(forced.first_name + " " + forced.last_name);
  if (like && select_friends == removedCard.first_name + " " + removedCard.last_name)
      this.presentToast(true, null);
  else
      this.presentToast(false, removedCard.first_name + " " + removedCard.last_name);
  ++this.cards_index;
  console.log("VOTE UP MIN : " + this.min + ",MAX : " + this.max + ",CURRENT : " + this.cards_index );
  if (this.cards_index == this.max)
    this.updateMinMax();
}

// http://stackoverflow.com/questions/57803/how-to-convert-decimal-to-hex-in-javascript
decimalToHex(d, padding) {
  var hex = Number(d).toString(16);
  padding = typeof (padding) === "undefined" || padding === null ? padding = 2 : padding;
  while (hex.length < padding) {
    hex = "0" + hex;
  }
  return hex;
}

}
