(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-signup-signup-module"],{

/***/ "./src/app/pages/signup/signup-routing.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/pages/signup/signup-routing.module.ts ***!
  \*******************************************************/
/*! exports provided: SignupPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupPageRoutingModule", function() { return SignupPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _signup__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./signup */ "./src/app/pages/signup/signup.ts");




var routes = [
    {
        path: '',
        component: _signup__WEBPACK_IMPORTED_MODULE_3__["SignupPage"]
    }
];
var SignupPageRoutingModule = /** @class */ (function () {
    function SignupPageRoutingModule() {
    }
    SignupPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], SignupPageRoutingModule);
    return SignupPageRoutingModule;
}());



/***/ }),

/***/ "./src/app/pages/signup/signup.html":
/*!******************************************!*\
  !*** ./src/app/pages/signup/signup.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title>Signup</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n  <div class=\"signup-logo\">\n    <img src=\"assets/img/appicon.svg\" alt=\"Ionic Logo\">\n  </div>\n\n  <form #signupForm=\"ngForm\" novalidate>\n    <ion-list lines=\"none\">\n      <ion-item>\n        <ion-label position=\"stacked\" color=\"primary\">Username</ion-label>\n        <ion-input [(ngModel)]=\"signup.username\" name=\"username\" type=\"text\" #username=\"ngModel\" required>\n        </ion-input>\n      </ion-item>\n      <ion-text color=\"danger\">\n        <p [hidden]=\"username.valid || submitted == false\" class=\"ion-padding-start\">\n          Username is required\n        </p>\n      </ion-text>\n\n      <ion-item>\n        <ion-label position=\"stacked\" color=\"primary\">Password</ion-label>\n        <ion-input [(ngModel)]=\"signup.password\" name=\"password\" type=\"password\" #password=\"ngModel\" required>\n        </ion-input>\n      </ion-item>\n      <ion-text color=\"danger\">\n        <p [hidden]=\"password.valid || submitted == false\" class=\"ion-padding-start\">\n          Password is required\n        </p>\n      </ion-text>\n    </ion-list>\n\n    <div class=\"ion-padding\">\n      <ion-button (click)=\"onSignup(signupForm)\" type=\"submit\" expand=\"block\">Create</ion-button>\n    </div>\n  </form>\n\n</ion-content>\n"

/***/ }),

/***/ "./src/app/pages/signup/signup.module.ts":
/*!***********************************************!*\
  !*** ./src/app/pages/signup/signup.module.ts ***!
  \***********************************************/
/*! exports provided: SignUpModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignUpModule", function() { return SignUpModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _signup__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./signup */ "./src/app/pages/signup/signup.ts");
/* harmony import */ var _signup_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./signup-routing.module */ "./src/app/pages/signup/signup-routing.module.ts");







var SignUpModule = /** @class */ (function () {
    function SignUpModule() {
    }
    SignUpModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _signup_routing_module__WEBPACK_IMPORTED_MODULE_6__["SignupPageRoutingModule"]
            ],
            declarations: [
                _signup__WEBPACK_IMPORTED_MODULE_5__["SignupPage"],
            ]
        })
    ], SignUpModule);
    return SignUpModule;
}());



/***/ }),

/***/ "./src/app/pages/signup/signup.scss":
/*!******************************************!*\
  !*** ./src/app/pages/signup/signup.scss ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".signup-logo {\n  padding: 20px 0;\n  min-height: 200px;\n  text-align: center; }\n\n.signup-logo img {\n  max-width: 150px; }\n\n.list {\n  margin-bottom: 0; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9ndW5uaWxlL0lvbmljUHJvamVjdHMveW91cnN0YXIveW91cnN0YXIvc3JjL2FwcC9wYWdlcy9zaWdudXAvc2lnbnVwLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxlQUFlO0VBQ2YsaUJBQWlCO0VBQ2pCLGtCQUFrQixFQUFBOztBQUdwQjtFQUNFLGdCQUFnQixFQUFBOztBQUdsQjtFQUNFLGdCQUFnQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvc2lnbnVwL3NpZ251cC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnNpZ251cC1sb2dvIHtcbiAgcGFkZGluZzogMjBweCAwO1xuICBtaW4taGVpZ2h0OiAyMDBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uc2lnbnVwLWxvZ28gaW1nIHtcbiAgbWF4LXdpZHRoOiAxNTBweDtcbn1cblxuLmxpc3Qge1xuICBtYXJnaW4tYm90dG9tOiAwO1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/pages/signup/signup.ts":
/*!****************************************!*\
  !*** ./src/app/pages/signup/signup.ts ***!
  \****************************************/
/*! exports provided: SignupPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupPage", function() { return SignupPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _providers_user_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../providers/user-data */ "./src/app/providers/user-data.ts");




var SignupPage = /** @class */ (function () {
    function SignupPage(router, userData) {
        this.router = router;
        this.userData = userData;
        this.signup = { username: '', password: '' };
        this.submitted = false;
    }
    SignupPage.prototype.onSignup = function (form) {
        this.submitted = true;
        if (form.valid) {
            this.userData.signup(this.signup.username);
            this.router.navigateByUrl('/app/tabs/schedule');
        }
    };
    SignupPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'page-signup',
            template: __webpack_require__(/*! ./signup.html */ "./src/app/pages/signup/signup.html"),
            styles: [__webpack_require__(/*! ./signup.scss */ "./src/app/pages/signup/signup.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _providers_user_data__WEBPACK_IMPORTED_MODULE_3__["UserData"]])
    ], SignupPage);
    return SignupPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-signup-signup-module.js.map