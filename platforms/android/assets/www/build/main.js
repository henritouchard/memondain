webpackJsonp([0],{

/***/ 147:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__tabs_tabs__ = __webpack_require__(273);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_facebook__ = __webpack_require__(89);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var LoginPage = (function () {
    function LoginPage(fb, navCtrl, toastCtrl) {
        var _this = this;
        this.fb = fb;
        this.navCtrl = navCtrl;
        this.toastCtrl = toastCtrl;
        this.isLoggedIn = false;
        fb.getLoginStatus()
            .then(function (res) {
            console.log(res.status);
            if (res.status === "connect")
                _this.isLoggedIn = true;
            else
                _this.isLoggedIn = false;
        })
            .catch(function (e) { return console.log(e); });
    }
    LoginPage.prototype.reload = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__tabs_tabs__["a" /* TabsPage */]);
    };
    LoginPage.prototype.checkNetwork = function () {
        var networkState = navigator.connection.type;
        var states = {};
        states[Connection.UNKNOWN] = 'Unknown connection';
        states[Connection.ETHERNET] = 'Ethernet connection';
        states[Connection.WIFI] = 'WiFi connection';
        states[Connection.CELL_2G] = 'Cell 2G connection';
        states[Connection.CELL_3G] = 'Cell 3G connection';
        states[Connection.CELL_4G] = 'Cell 4G connection';
        states[Connection.CELL] = 'Cell generic connection';
        states[Connection.NONE] = 'No network connection';
        if (states[networkState] == states[Connection.NONE]) {
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
    };
    LoginPage.prototype.onConnect = function () {
        var _this = this;
        console.log(this.checkNetwork());
        if (this.checkNetwork()) {
            console.log("apparemment ça return true");
            this.fb.login(['public_profile', 'user_friends', 'email'])
                .then(function (res) {
                if (res.status === "connected") {
                    _this.isLoggedIn = true;
                    _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__tabs_tabs__["a" /* TabsPage */]);
                }
                else
                    _this.isLoggedIn = false;
            })
                .catch(function (e) { return console.log('Error logging into Facebook', e); });
        }
    };
    LoginPage.prototype.logout = function () {
        var _this = this;
        this.fb.logout()
            .then(function (res) { return _this.isLoggedIn = false; })
            .catch(function (e) { return console.log('Error logout from Facebook', e); });
    };
    return LoginPage;
}());
LoginPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-login',template:/*ion-inline-start:"/home/toucha/Documents/tek/mobile/memondain/src/pages/login/login.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>Memondain</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding id="loginPage">\n  <ion-footer no-shadow class="btn">\n  <div *ngIf="isLoggedIn; else facebookLogin" class="connectBtn">\n    <div row>\n      <button ion-button block type="button" (click)="reload()">\n        Reload\n      </button>\n    </div>\n    <div row>\n      <button ion-button block type="button" (click)="logout()">\n        Déconnection<ion-icon name="logo-facebook"></ion-icon>\n      </button>\n    </div>\n</div>\n  <ng-template #facebookLogin>\n      <button ion-button block type="button" (click)="onConnect()">\n        Connection<ion-icon name="logo-facebook"></ion-icon>\n      </button>\n  </ng-template>\n</ion-footer>\n</ion-content>\n'/*ion-inline-end:"/home/toucha/Documents/tek/mobile/memondain/src/pages/login/login.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__ionic_native_facebook__["a" /* Facebook */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* ToastController */]])
], LoginPage);

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 186:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 186;

/***/ }),

/***/ 229:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 229;

/***/ }),

/***/ 273:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__about_about__ = __webpack_require__(274);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__login_login__ = __webpack_require__(147);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__home_home__ = __webpack_require__(275);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var TabsPage = (function () {
    function TabsPage(navCtrl) {
        this.navCtrl = navCtrl;
        this.tab1Root = __WEBPACK_IMPORTED_MODULE_4__home_home__["a" /* HomePage */];
        this.tab2Root = __WEBPACK_IMPORTED_MODULE_2__about_about__["a" /* AboutPage */];
        this.tab3Root = __WEBPACK_IMPORTED_MODULE_3__login_login__["a" /* LoginPage */];
    }
    TabsPage.prototype.quit = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__login_login__["a" /* LoginPage */]);
    };
    return TabsPage;
}());
TabsPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({template:/*ion-inline-start:"/home/toucha/Documents/tek/mobile/memondain/src/pages/tabs/tabs.html"*/'<ion-tabs>\n  <ion-tab [root]="tab1Root" tabTitle="Game" tabIcon="home"></ion-tab>\n  <ion-tab [root]="tab2Root" tabTitle="Friends List" tabIcon="information-circle"></ion-tab>\n  <ion-tab tabTitle="Exit" tabIcon="log-out" (ionSelect)="quit()"></ion-tab>\n</ion-tabs>\n'/*ion-inline-end:"/home/toucha/Documents/tek/mobile/memondain/src/pages/tabs/tabs.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */]])
], TabsPage);

//# sourceMappingURL=tabs.js.map

/***/ }),

/***/ 274:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_facebook__ = __webpack_require__(89);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AboutPage = (function () {
    function AboutPage(fb, navCtrl) {
        this.fb = fb;
        this.navCtrl = navCtrl;
        this.getFriends();
    }
    AboutPage.prototype.getFriends = function () {
        var _this = this;
        this.fb.api("me/taggable_friends?fields=first_name,last_name,picture.width(70).height(70)&limit=5000", ["user_friends"])
            .then(function (res) {
            for (var _i = 0, _a = res.data; _i < _a.length; _i++) {
                var val = _a[_i];
                _this.cards.push(val);
            }
        }).catch(function (e) {
            console.log(e);
        });
    };
    AboutPage.prototype.ngAfterViewInit = function () {
        this.cards = [{ first_name: '', last_name: '' }];
    };
    return AboutPage;
}());
AboutPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-about',template:/*ion-inline-start:"/home/toucha/Documents/tek/mobile/memondain/src/pages/about/about.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      Friends List\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <ion-grid class="buttonContainer">\n    <ion-row *ngFor="let c of cards">\n        <ion-col col-12 >\n              <ion-item>\n                <ion-avatar>\n                <img *ngIf="c.picture"[src]="c.picture.data.url">\n                <h2 class="textItem">{{c.first_name}} {{c.last_name}}</h2>\n              </ion-avatar>\n              </ion-item>\n        </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>\n'/*ion-inline-end:"/home/toucha/Documents/tek/mobile/memondain/src/pages/about/about.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__ionic_native_facebook__["a" /* Facebook */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */]])
], AboutPage);

//# sourceMappingURL=about.js.map

/***/ }),

/***/ 275:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_facebook__ = __webpack_require__(89);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__ = __webpack_require__(148);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_swing__ = __webpack_require__(319);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_swing___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_angular2_swing__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var HomePage = (function () {
    function HomePage(fb, navCtrl, toastCtrl) {
        var _this = this;
        this.fb = fb;
        this.navCtrl = navCtrl;
        this.toastCtrl = toastCtrl;
        this.recentCard = '';
        this.success = 0;
        this.error = 0;
        this.total = 0;
        this.min = 0;
        this.max = 10;
        this.cards_index = 0;
        this.stackConfig = {
            throwOutConfidence: function (offsetX, offsetY, element) {
                return Math.min(Math.abs(offsetX) / (element.offsetWidth / 2), 1);
            },
            transform: function (element, x, y, r) {
                _this.onItemMove(element, x, y, r);
            },
            throwOutDistance: function (d) {
                return 800;
            }
        };
        this.getFriends();
    }
    HomePage.prototype.checkNetwork = function () {
        var networkState = navigator.connection.type;
        var states = {};
        states[Connection.UNKNOWN] = 'Unknown connection';
        states[Connection.ETHERNET] = 'Ethernet connection';
        states[Connection.WIFI] = 'WiFi connection';
        states[Connection.CELL_2G] = 'Cell 2G connection';
        states[Connection.CELL_3G] = 'Cell 3G connection';
        states[Connection.CELL_4G] = 'Cell 4G connection';
        states[Connection.CELL] = 'Cell generic connection';
        states[Connection.NONE] = 'No network connection';
        if (states[networkState] == states[Connection.CELL_2G]) {
            return 1;
        }
        if (states[networkState] == states[Connection.CELL_3G]) {
            return 2;
        }
        else if (states[networkState] == states[Connection.WIFI] || states[networkState] == states[Connection.CELL_4G] || states[networkState] == states[Connection.ETHERNET]) {
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
    };
    HomePage.prototype.getFriends = function () {
        var _this = this;
        console.log("get Friends");
        var connection = this.checkNetwork();
        var request = "";
        if (connection == 0) {
            console.log("connexion quality null");
            return -1;
        }
        else if (connection == 1) {
            request = "me/taggable_friends?fields=first_name,last_name,picture.width(100).height(100)&limit=200";
            console.log("connexion quality medium");
        }
        else if (connection == 2) {
            request = "me/taggable_friends?fields=first_name,last_name,picture.width(200).height(200)&limit=5000";
            console.log("connexion quality medium");
        }
        else {
            request = "me/taggable_friends?fields=first_name,last_name,picture.width(400).height(400)&limit=5000";
            console.log("connexion quality good");
        }
        this.fb.api(request, ["user_friends"])
            .then(function (res) {
            var nb_friends = res.data.length;
            for (var count = 0; count < nb_friends; count++) {
                var rand = Math.floor(Math.random() * nb_friends) + 0;
                console.log(rand);
                var val = res.data[rand];
                if (val.url == "https://scontent.xx.fbcdn.net/v/t1.0-1/c29.0.100.100/p100x100/10354686_10150004552801856_220367501106153455_n.jpg?oh=049ecfece14dfe681a2cc083eeaabc6f&oe=5AA0FC77")
                    continue;
                _this.cards.push(val);
                _this.all_friends.push(val.first_name + " " + val.last_name);
            }
            var current = _this.cards.slice(_this.min, _this.max);
            _this.random_friends = _this.getRandomFriendIncludeOne(_this.cards[_this.min + current.length - 1].first_name + " " + _this.cards[_this.min + current.length - 1].last_name);
        }).catch(function (e) {
            console.log(e);
        });
    };
    HomePage.prototype.getRandomFriendIncludeOne = function (forced_friends) {
        var randomFriends = new Array(6);
        console.log("Forced Friends : " + forced_friends);
        randomFriends[Math.floor(Math.random() * 6)] = forced_friends;
        for (var i = 0; i < 6; ++i) {
            if (randomFriends[i] == null || randomFriends[i] == "") {
                var f = this.all_friends[Math.floor(Math.random() * this.all_friends.length)];
                if (randomFriends.indexOf(f) == -1)
                    randomFriends[i] = f;
                else
                    --i;
            }
        }
        return randomFriends;
    };
    HomePage.prototype.ngAfterViewInit = function () {
        // Either subscribe in controller or set in HTML
        this.swingStack.throwin.subscribe(function (event) {
            event.target.style.background = '#ffffff';
        });
        this.cards = [{ first_name: '', last_name: '' }];
        this.all_friends = [];
        this.random_friends = [];
        this.min = 0;
        this.max = 10;
        this.cards_index = 0;
        //this.addNewCards(1);
    };
    // Called whenever we drag an element
    HomePage.prototype.onItemMove = function (element, x, y, r) {
        var color = '';
        var abs = Math.abs(x);
        var min = Math.trunc(Math.min(16 * 16 - abs, 16 * 16));
        var hexCode = this.decimalToHex(min, 2);
        /*if (x < 0) {*/
        color = '#FF' + hexCode + hexCode;
        /*} else {
          color = '#' + hexCode + 'FF' + hexCode;
        }*/
        element.style.background = color;
        element.style['transform'] = "translate3d(0, 0, 0) translate(" + x + "px, 0px) rotate(" + r + "deg)"; //replace trnslate: 0px by ${x}
    };
    HomePage.prototype.presentToast = function (success, name) {
        if (this.toast != null)
            this.toast.dismiss();
        if (success)
            ++this.success;
        else
            ++this.error;
        ++this.total;
        this.toast = this.toastCtrl.create({
            message: (success) ? 'Success ! ' + this.success + "/" + this.total : 'It seems you don\'t know! ' + this.success + "/" + this.total + "\nAnswer was " + name,
            position: 'bottom',
            showCloseButton: true
        });
        this.toast.present();
    };
    HomePage.prototype.updateMinMax = function () {
        this.min = this.min + 10;
        this.max = this.max + 10;
        console.log("MIN : " + this.min + ",MAX : " + this.max + ",CURRENT : " + this.cards_index);
    };
    // Connected through HTML
    HomePage.prototype.voteUp = function (like, select_friends) {
        var current = this.cards.slice(this.min, this.max);
        var removedCard = this.cards[this.min + current.length - 1];
        this.cards.splice(this.min + current.length - 1, 1);
        var forced = this.cards[this.min + current.length - 1];
        console.log("SELECT : " + select_friends + " REMOVED : " + removedCard.first_name + " " + removedCard.last_name);
        this.random_friends = this.getRandomFriendIncludeOne(forced.first_name + " " + forced.last_name);
        if (like && select_friends == removedCard.first_name + " " + removedCard.last_name)
            this.presentToast(true, null);
        else
            this.presentToast(false, removedCard.first_name + " " + removedCard.last_name);
        ++this.cards_index;
        console.log("VOTE UP MIN : " + this.min + ",MAX : " + this.max + ",CURRENT : " + this.cards_index);
        if (this.cards_index == this.max)
            this.updateMinMax();
    };
    // http://stackoverflow.com/questions/57803/how-to-convert-decimal-to-hex-in-javascript
    HomePage.prototype.decimalToHex = function (d, padding) {
        var hex = Number(d).toString(16);
        padding = typeof (padding) === "undefined" || padding === null ? padding = 2 : padding;
        while (hex.length < padding) {
            hex = "0" + hex;
        }
        return hex;
    };
    return HomePage;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('myswing1'),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_4_angular2_swing__["SwingStackComponent"])
], HomePage.prototype, "swingStack", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChildren"])('mycards1'),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["QueryList"])
], HomePage.prototype, "swingCards", void 0);
HomePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-home',template:/*ion-inline-start:"/home/toucha/Documents/tek/mobile/memondain/src/pages/home/home.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>Memondain</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n<div swing-stack #myswing1 [stackConfig]="stackConfig" (throwoutleft)="voteUp(false, \'\')" (throwoutright)="voteUp(false, \'\')" id="card-stack">\n    <ion-card #mycards1 swing-card *ngFor="let c of cards | slice:min:max">\n        <div *ngIf="cards.length > 0; else end">\n          <div *ngIf="cards.length > 1; else loader">\n          <ion-item *ngIf="c.picture">\n            <p><img  *ngIf="c.picture"[src]="c.picture.data.url"></p>\n          </ion-item>\n          <ion-grid class="buttonContainer">\n            <ion-row>\n                <ion-col col-6  *ngFor="let f of random_friends">\n                  <button ion-button class="buttonName" color="primary" (click)="voteUp(true, f)">\n                        {{f}}\n                  </button>\n                </ion-col>\n            </ion-row>\n          </ion-grid>\n          </div>\n          <ng-template #loader>\n            <ion-spinner></ion-spinner>\n          </ng-template>\n        </div>\n        <ng-template #end>\n          <button ion-button block type="button" >\n            Reload\n          </button>\n        </ng-template>\n\n    </ion-card>\n</div>\n<p style="text-align: center; width: 100%;">{{ recentCard }}</p>\n</ion-content>\n'/*ion-inline-end:"/home/toucha/Documents/tek/mobile/memondain/src/pages/home/home.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__ionic_native_facebook__["a" /* Facebook */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* ToastController */]])
], HomePage);

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 490:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(491);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(495);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 495:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(532);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_about_about__ = __webpack_require__(274);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_home_home__ = __webpack_require__(275);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_tabs_tabs__ = __webpack_require__(273);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_login_login__ = __webpack_require__(147);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_status_bar__ = __webpack_require__(269);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_native_splash_screen__ = __webpack_require__(272);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__angular_http__ = __webpack_require__(787);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_angular2_swing__ = __webpack_require__(319);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_angular2_swing___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_angular2_swing__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__ionic_cloud_angular__ = __webpack_require__(788);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__ionic_native_facebook__ = __webpack_require__(89);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};














var cloudSettings = {
    'core': {
        'app_id': '1957252647883148'
    },
    'auth': {
        'facebook': {
            'scope': ['public_profile', 'email', 'user_friends']
        }
    }
};
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_4__pages_about_about__["a" /* AboutPage */],
            __WEBPACK_IMPORTED_MODULE_5__pages_home_home__["a" /* HomePage */],
            __WEBPACK_IMPORTED_MODULE_6__pages_tabs_tabs__["a" /* TabsPage */],
            __WEBPACK_IMPORTED_MODULE_7__pages_login_login__["a" /* LoginPage */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_10__angular_http__["a" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_11_angular2_swing__["SwingModule"],
            __WEBPACK_IMPORTED_MODULE_12__ionic_cloud_angular__["a" /* CloudModule */].forRoot(cloudSettings),
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {}, {
                links: []
            })
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* IonicApp */]],
        entryComponents: [
            __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_4__pages_about_about__["a" /* AboutPage */],
            __WEBPACK_IMPORTED_MODULE_5__pages_home_home__["a" /* HomePage */],
            __WEBPACK_IMPORTED_MODULE_6__pages_tabs_tabs__["a" /* TabsPage */],
            __WEBPACK_IMPORTED_MODULE_7__pages_login_login__["a" /* LoginPage */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_8__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_9__ionic_native_splash_screen__["a" /* SplashScreen */],
            { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ErrorHandler"], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicErrorHandler */] },
            __WEBPACK_IMPORTED_MODULE_13__ionic_native_facebook__["a" /* Facebook */]
        ]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 532:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(269);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(272);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_login_login__ = __webpack_require__(147);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MyApp = (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_login_login__["a" /* LoginPage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    return MyApp;
}());
MyApp = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({template:/*ion-inline-start:"/home/toucha/Documents/tek/mobile/memondain/src/app/app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"/home/toucha/Documents/tek/mobile/memondain/src/app/app.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
], MyApp);

//# sourceMappingURL=app.component.js.map

/***/ })

},[490]);
//# sourceMappingURL=main.js.map