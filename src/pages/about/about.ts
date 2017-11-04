import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Facebook } from '@ionic-native/facebook';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {

  cards: Array<any>;

  constructor(public fb: Facebook, public navCtrl: NavController) {
    this.getFriends();
  }

  getFriends() {
    this.fb.api("me/taggable_friends?fields=first_name,last_name,picture.width(70).height(70)&limit=5000",["user_friends"])
      .then(res => {
        for (let val of res.data) {
          this.cards.push(val);
        }
      }).catch(e => {
        console.log(e);
      });
  }

  ngAfterViewInit() {
    this.cards = [{first_name:'', last_name:''}];
  }

}
