(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-tutorial-tutorial-module"],{

/***/ "./src/app/pages/tutorial/tutorial-routing.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/pages/tutorial/tutorial-routing.module.ts ***!
  \***********************************************************/
/*! exports provided: TutorialPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TutorialPageRoutingModule", function() { return TutorialPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _tutorial__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./tutorial */ "./src/app/pages/tutorial/tutorial.ts");




var routes = [
    {
        path: '',
        component: _tutorial__WEBPACK_IMPORTED_MODULE_3__["TutorialPage"]
    }
];
var TutorialPageRoutingModule = /** @class */ (function () {
    function TutorialPageRoutingModule() {
    }
    TutorialPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], TutorialPageRoutingModule);
    return TutorialPageRoutingModule;
}());



/***/ }),

/***/ "./src/app/pages/tutorial/tutorial.html":
/*!**********************************************!*\
  !*** ./src/app/pages/tutorial/tutorial.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header no-border>\n  <ion-toolbar>\n    <ion-buttons slot=\"end\">\n      <ion-button color='primary' (click)=\"startApp()\" [hidden]=\"!showSkip\">Skip</ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content fullscreen>\n  <ion-slides #slides (ionSlideWillChange)=\"onSlideChangeStart($event)\" pager=\"false\">\n    <ion-slide>\n      <img src=\"assets/img/ica-slidebox-img-1.png\" class=\"slide-image\" />\n      <h2 class=\"slide-title\">\n        Welcome to\n        <b>ICA</b>\n      </h2>\n      <p>\n        The\n        <b>ionic conference app</b> is a practical preview of the ionic framework in action, and a demonstration of proper code\n        use.\n      </p>\n    </ion-slide>\n\n    <ion-slide>\n      <img src=\"assets/img/ica-slidebox-img-2.png\" class=\"slide-image\" />\n      <h2 class=\"slide-title\">What is Ionic?</h2>\n      <p>\n        <b>Ionic Framework</b> is an open source SDK that enables developers to build high quality mobile apps with web technologies\n        like HTML, CSS, and JavaScript.</p>\n    </ion-slide>\n\n    <ion-slide>\n      <img src=\"assets/img/ica-slidebox-img-3.png\" class=\"slide-image\" />\n      <h2 class=\"slide-title\">What is Ionic Pro?</h2>\n      <p>\n        <b>Ionic Pro</b> is a powerful set of services and features built on top of Ionic Framework that brings a totally new\n        level of app development agility to mobile dev teams.</p>\n    </ion-slide>\n\n    <ion-slide>\n      <img src=\"assets/img/ica-slidebox-img-4.png\" class=\"slide-image\" />\n      <h2 class=\"slide-title\">Ready to Play?</h2>\n      <ion-button fill=\"clear\" (click)=\"startApp()\">\n        Continue\n        <ion-icon slot=\"end\" name=\"arrow-forward\"></ion-icon>\n      </ion-button>\n    </ion-slide>\n  </ion-slides>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/pages/tutorial/tutorial.module.ts":
/*!***************************************************!*\
  !*** ./src/app/pages/tutorial/tutorial.module.ts ***!
  \***************************************************/
/*! exports provided: TutorialModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TutorialModule", function() { return TutorialModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _tutorial__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./tutorial */ "./src/app/pages/tutorial/tutorial.ts");
/* harmony import */ var _tutorial_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./tutorial-routing.module */ "./src/app/pages/tutorial/tutorial-routing.module.ts");






var TutorialModule = /** @class */ (function () {
    function TutorialModule() {
    }
    TutorialModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"],
                _tutorial_routing_module__WEBPACK_IMPORTED_MODULE_5__["TutorialPageRoutingModule"]
            ],
            declarations: [_tutorial__WEBPACK_IMPORTED_MODULE_4__["TutorialPage"]],
            entryComponents: [_tutorial__WEBPACK_IMPORTED_MODULE_4__["TutorialPage"]],
        })
    ], TutorialModule);
    return TutorialModule;
}());



/***/ }),

/***/ "./src/app/pages/tutorial/tutorial.scss":
/*!**********************************************!*\
  !*** ./src/app/pages/tutorial/tutorial.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-toolbar {\n  --background: transparent;\n  --border-color: transparent; }\n\n.swiper-slide {\n  display: block; }\n\n.slide-title {\n  margin-top: 2.8rem; }\n\n.slide-image {\n  max-height: 50%;\n  max-width: 60%;\n  margin: 36px 0; }\n\nb {\n  font-weight: 500; }\n\np {\n  padding: 0 40px;\n  font-size: 14px;\n  line-height: 1.5;\n  color: #60646b; }\n\np b {\n    color: #000000; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9ndW5uaWxlL0lvbmljUHJvamVjdHMveW91cnN0YXIveW91cnN0YXIvc3JjL2FwcC9wYWdlcy90dXRvcmlhbC90dXRvcmlhbC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBRUUseUJBQWE7RUFDYiwyQkFBZSxFQUFBOztBQUdqQjtFQUNFLGNBQWMsRUFBQTs7QUFHaEI7RUFDRSxrQkFBa0IsRUFBQTs7QUFHcEI7RUFDRSxlQUFlO0VBQ2YsY0FBYztFQUNkLGNBQWMsRUFBQTs7QUFHaEI7RUFDRSxnQkFBZ0IsRUFBQTs7QUFHbEI7RUFDRSxlQUFlO0VBQ2YsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixjQUFjLEVBQUE7O0FBSmhCO0lBT0ksY0FBYyxFQUFBIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvdHV0b3JpYWwvdHV0b3JpYWwuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi10b29sYmFyIHtcbiAgLy8gVE9ETyB0ZXN0IHRyYW5zcGFyZW50IGFuZCBmdWxsc2NyZWVuXG4gIC0tYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gIC0tYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudDtcbn1cblxuLnN3aXBlci1zbGlkZSB7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuXG4uc2xpZGUtdGl0bGUge1xuICBtYXJnaW4tdG9wOiAyLjhyZW07XG59XG5cbi5zbGlkZS1pbWFnZSB7XG4gIG1heC1oZWlnaHQ6IDUwJTtcbiAgbWF4LXdpZHRoOiA2MCU7XG4gIG1hcmdpbjogMzZweCAwO1xufVxuXG5iIHtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbn1cblxucCB7XG4gIHBhZGRpbmc6IDAgNDBweDtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBsaW5lLWhlaWdodDogMS41O1xuICBjb2xvcjogIzYwNjQ2YjtcblxuICBiIHtcbiAgICBjb2xvcjogIzAwMDAwMDtcbiAgfVxufVxuIl19 */"

/***/ }),

/***/ "./src/app/pages/tutorial/tutorial.ts":
/*!********************************************!*\
  !*** ./src/app/pages/tutorial/tutorial.ts ***!
  \********************************************/
/*! exports provided: TutorialPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TutorialPage", function() { return TutorialPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm5/ionic-storage.js");





var TutorialPage = /** @class */ (function () {
    function TutorialPage(menu, router, storage) {
        this.menu = menu;
        this.router = router;
        this.storage = storage;
        this.showSkip = true;
    }
    TutorialPage.prototype.startApp = function () {
        var _this = this;
        this.router
            .navigateByUrl('/app/tabs/events')
            .then(function () { return _this.storage.set('ion_did_tutorial', true); });
    };
    TutorialPage.prototype.onSlideChangeStart = function (event) {
        var _this = this;
        event.target.isEnd().then(function (isEnd) {
            _this.showSkip = !isEnd;
        });
    };
    TutorialPage.prototype.ionViewWillEnter = function () {
        var _this = this;
        this.storage.get('ion_did_tutorial').then(function (res) {
            if (res === true) {
                _this.router.navigateByUrl('/app/tabs/events');
            }
        });
        this.menu.enable(false);
    };
    TutorialPage.prototype.ionViewDidLeave = function () {
        // enable the root left menu when leaving the tutorial page
        this.menu.enable(true);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('slides'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonSlides"])
    ], TutorialPage.prototype, "slides", void 0);
    TutorialPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'page-tutorial',
            template: __webpack_require__(/*! ./tutorial.html */ "./src/app/pages/tutorial/tutorial.html"),
            styles: [__webpack_require__(/*! ./tutorial.scss */ "./src/app/pages/tutorial/tutorial.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["MenuController"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _ionic_storage__WEBPACK_IMPORTED_MODULE_4__["Storage"]])
    ], TutorialPage);
    return TutorialPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-tutorial-tutorial-module.js.map