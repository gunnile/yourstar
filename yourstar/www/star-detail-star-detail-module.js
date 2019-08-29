(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["star-detail-star-detail-module"],{

/***/ "./node_modules/ionic4-star-rating/dist/components/ionic4-star-rating-component.js":
/*!*****************************************************************************************!*\
  !*** ./node_modules/ionic4-star-rating/dist/components/ionic4-star-rating-component.js ***!
  \*****************************************************************************************/
/*! exports provided: StarRating */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StarRating", function() { return StarRating; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HTML_TEMPLATE = "\n<div class=\"ionic4-star-rating\">\n  <button [ngStyle]=\"{'width' : fontSize, 'height' : fontSize}\" *ngFor=\"let index of iconsArray\" id=\"{{index}}\" type=\"button\" ion-button icon-only (click)=\"changeRating($event)\">\n    <ion-icon [ngStyle]=\"{'color':index < this.Math.round(this.parseFloat(rating)) ? activeColor : defaultColor, 'font-size' : fontSize }\" name=\"{{(halfStar ==='true' && (rating - index > 0) && (rating - index <= 0.5)) ? halfIcon : (index < this.Math.round(this.parseFloat(rating))) ? activeIcon : defaultIcon}}\"></ion-icon>\n  </button>\n</div>\n";
var CSS_STYLE = "\n    .ionic4-star-rating button {\n        background: none;\n        box-shadow: none;\n        -webkit-box-shadow: none;\n        padding : 0px;\n    }\n";
var StarRating = /** @class */ (function () {
    function StarRating(events) {
        this.events = events;
        this.eventInfo = (function () {
            var id = new Date().getTime();
            var topic = "star-rating:" + id + ":changed";
            return {
                topic: topic
            };
        })();
        this.ratingChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.readonly = "false";
        this.activeColor = '#488aff';
        this.defaultColor = '#aaaaaa';
        this.activeIcon = 'ios-star';
        this.defaultIcon = 'ios-star-outline';
        this.halfIcon = 'ios-star-half';
        this.halfStar = "false";
        this.maxRating = 5;
        this.fontSize = '28px';
        this.iconsArray = [];
        this.Math = Math;
        this.parseFloat = parseFloat;
    }
    StarRating_1 = StarRating;
    StarRating.prototype.ngOnInit = function () {
        this.rating = this.rating || 3; //default after input`s initialization
        for (var i = 0; i < this.maxRating; i++) {
            this.iconsArray.push(i);
        }
    };
    StarRating.prototype.writeValue = function (obj) {
        this.rating = obj;
    };
    StarRating.prototype.registerOnChange = function (fn) {
        this.onChange = fn;
    };
    StarRating.prototype.registerOnTouched = function (fn) {
        this.onTouched = fn;
    };
    StarRating.prototype.setDisabledState = function (isDisabled) {
        this.readonly = isDisabled ? "true" : "false";
    };
    Object.defineProperty(StarRating.prototype, "rating", {
        get: function () {
            return this._rating;
        },
        set: function (val) {
            this._rating = val;
            // for form
            if (this.onChange) {
                this.onChange(val);
            }
        },
        enumerable: true,
        configurable: true
    });
    StarRating.prototype.changeRating = function (event) {
        if (this.readonly && this.readonly === "true")
            return;
        // event is different for firefox and chrome
        var id = event.target.id ? parseInt(event.target.id) : parseInt(event.target.parentElement.id);
        if (this.halfStar && this.halfStar === "true") {
            this.rating = ((this.rating - id > 0) && (this.rating - id <= 0.5)) ? id + 1 : id + .5;
        }
        else {
            this.rating = id + 1;
        }
        // subscribe this event to get the changed value in your parent compoanent 
        this.events.publish("star-rating:changed", this.rating); //common event for all instances included for backwards compatibility
        this.events.publish(this.eventInfo.topic, this.rating); //common event for all instances
        // unique event
        this.ratingChanged.emit(this.rating);
    };
    var StarRating_1;
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number),
        __metadata("design:paramtypes", [Number])
    ], StarRating.prototype, "rating", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], StarRating.prototype, "ratingChanged", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], StarRating.prototype, "readonly", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], StarRating.prototype, "activeColor", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], StarRating.prototype, "defaultColor", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], StarRating.prototype, "activeIcon", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], StarRating.prototype, "defaultIcon", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], StarRating.prototype, "halfIcon", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], StarRating.prototype, "halfStar", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number)
    ], StarRating.prototype, "maxRating", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], StarRating.prototype, "fontSize", void 0);
    StarRating = StarRating_1 = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'ionic4-star-rating',
            template: HTML_TEMPLATE,
            styles: [CSS_STYLE],
            providers: [
                {
                    provide: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALUE_ACCESSOR"],
                    useExisting: StarRating_1,
                    multi: true
                }
            ]
        }),
        __metadata("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["Events"]])
    ], StarRating);
    return StarRating;
}());

//# sourceMappingURL=ionic4-star-rating-component.js.map

/***/ }),

/***/ "./node_modules/ionic4-star-rating/dist/index.js":
/*!*******************************************************!*\
  !*** ./node_modules/ionic4-star-rating/dist/index.js ***!
  \*******************************************************/
/*! exports provided: StarRatingModule, StarRating */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ionic4_star_rating_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ionic4-star-rating.module */ "./node_modules/ionic4-star-rating/dist/ionic4-star-rating.module.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "StarRatingModule", function() { return _ionic4_star_rating_module__WEBPACK_IMPORTED_MODULE_0__["StarRatingModule"]; });

/* harmony import */ var _components_ionic4_star_rating_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/ionic4-star-rating-component */ "./node_modules/ionic4-star-rating/dist/components/ionic4-star-rating-component.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "StarRating", function() { return _components_ionic4_star_rating_component__WEBPACK_IMPORTED_MODULE_1__["StarRating"]; });



//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/ionic4-star-rating/dist/ionic4-star-rating.module.js":
/*!***************************************************************************!*\
  !*** ./node_modules/ionic4-star-rating/dist/ionic4-star-rating.module.js ***!
  \***************************************************************************/
/*! exports provided: StarRatingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StarRatingModule", function() { return StarRatingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _components_ionic4_star_rating_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/ionic4-star-rating-component */ "./node_modules/ionic4-star-rating/dist/components/ionic4-star-rating-component.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var StarRatingModule = /** @class */ (function () {
    function StarRatingModule() {
    }
    StarRatingModule_1 = StarRatingModule;
    StarRatingModule.forRoot = function () {
        return {
            ngModule: StarRatingModule_1,
        };
    };
    var StarRatingModule_1;
    StarRatingModule = StarRatingModule_1 = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonicModule"]
            ],
            declarations: [
                _components_ionic4_star_rating_component__WEBPACK_IMPORTED_MODULE_1__["StarRating"]
            ],
            exports: [
                _components_ionic4_star_rating_component__WEBPACK_IMPORTED_MODULE_1__["StarRating"]
            ]
        })
    ], StarRatingModule);
    return StarRatingModule;
}());

//# sourceMappingURL=ionic4-star-rating.module.js.map

/***/ }),

/***/ "./src/app/pages/post/post-routing.module.ts":
/*!***************************************************!*\
  !*** ./src/app/pages/post/post-routing.module.ts ***!
  \***************************************************/
/*! exports provided: PostPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostPageRoutingModule", function() { return PostPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _post__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./post */ "./src/app/pages/post/post.ts");




var routes = [
    {
        path: '',
        component: _post__WEBPACK_IMPORTED_MODULE_3__["PostPage"]
    }
];
var PostPageRoutingModule = /** @class */ (function () {
    function PostPageRoutingModule() {
    }
    PostPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], PostPageRoutingModule);
    return PostPageRoutingModule;
}());



/***/ }),

/***/ "./src/app/pages/post/post.html":
/*!**************************************!*\
  !*** ./src/app/pages/post/post.html ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n    <ion-title>{{star?.name}}</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div *ngIf=\"star\" class=\"post-header\">\n    <img *ngIf=\"star.image\" [src]=\"star.image\" [alt]=\"star.name\">\n  </div>\n  <div class=\"post-info\">\n    <h4 class=\"ion-padding-start\">{{star?.name}} 's Score</h4>\n\n    <ion-label position=\"stacked\" color=\"primary\">type1</ion-label>\n    <ionic4-star-rating #rating\n    activeIcon = \"ios-star\"\n    defaultIcon = \"ios-star-outline\"\n    activeColor = \"#488aff\" \n    defaultColor = \"#f4f4f4\"\n    readonly=\"false\"\n    rating=\"3\"\n    fontSize = \"32px\"\n    (ratingChanged)=\"logRatingChange($event)\">\n    </ionic4-star-rating>\n    <ion-label position=\"stacked\" color=\"primary\">type2</ion-label>\n    <ionic4-star-rating #rating\n    activeIcon = \"ios-star\"\n    defaultIcon = \"ios-star-outline\"\n    activeColor = \"#488aff\" \n    defaultColor = \"#f4f4f4\"\n    readonly=\"false\"\n    rating=\"3\"\n    fontSize = \"32px\"\n    (ratingChanged)=\"logRatingChange($event)\">\n    </ionic4-star-rating>\n    <ion-label position=\"stacked\" color=\"primary\">type3</ion-label>\n    <ionic4-star-rating #rating\n    activeIcon = \"ios-star\"\n    defaultIcon = \"ios-star-outline\"\n    activeColor = \"#488aff\" \n    defaultColor = \"#f4f4f4\"\n    readonly=\"false\"\n    rating=\"3\"\n    fontSize = \"32px\"\n    (ratingChanged)=\"logRatingChange($event)\">\n    </ionic4-star-rating>\n    <ion-label position=\"stacked\" color=\"primary\">type4</ion-label>\n    <ionic4-star-rating #rating\n    activeIcon = \"ios-star\"\n    defaultIcon = \"ios-star-outline\"\n    activeColor = \"#488aff\" \n    defaultColor = \"#f4f4f4\"\n    readonly=\"false\"\n    rating=\"3\"\n    fontSize = \"32px\"\n    (ratingChanged)=\"logRatingChange($event)\">\n    </ionic4-star-rating>\n    <ion-label position=\"stacked\" color=\"primary\">type5</ion-label>\n    <ionic4-star-rating #rating\n    activeIcon = \"ios-star\"\n    defaultIcon = \"ios-star-outline\"\n    activeColor = \"#488aff\" \n    defaultColor = \"#f4f4f4\"\n    readonly=\"false\"\n    rating=\"3\"\n    fontSize = \"32px\"\n    (ratingChanged)=\"logRatingChange($event)\">\n    </ionic4-star-rating>\n  </div>\n\n  <form #submitForm=\"ngForm\" novalidate (ngSubmit)=\"submit(submitForm)\">\n    <ion-list lines=\"none\">\n      <ion-item>\n        <ion-label position=\"stacked\" color=\"primary\">Enter your support message below</ion-label>\n        <ion-textarea [(ngModel)]=\"supportMessage\" name=\"supportQuestion\" #supportQuestion=\"ngModel\" rows=\"6\" required></ion-textarea>\n      </ion-item>\n    </ion-list>\n\n    <ion-text color=\"danger\">\n      <p [hidden]=\"supportQuestion.valid || submitted === false\" class=\"ion-padding-start\">\n        Support message is required\n      </p>\n    </ion-text>\n\n    <div class=\"ion-padding\">\n      <ion-button expand=\"block\" type=\"submit\">Submit</ion-button>\n    </div>\n  </form>\n\n<!--   \n    <form #submitForm=\"ngForm\" novalidate (ngSubmit)=\"submit(submitForm)\">\n      <ion-list lines=\"none\">\n        <ion-item>\n          <ion-label position=\"stacked\" color=\"primary\">Enter your support message below</ion-label>\n          <ion-textarea [(ngModel)]=\"supportMessage\" name=\"supportQuestion\" #supportQuestion=\"ngModel\" rows=\"6\" required></ion-textarea>\n        </ion-item>\n      </ion-list>\n\n      <ion-text color=\"danger\">\n        <p [hidden]=\"supportQuestion.valid || submitted === false\" class=\"ion-padding-start\">\n          Support message is required\n        </p>\n      </ion-text>\n\n      <div class=\"ion-padding\">\n        <ion-button expand=\"block\" type=\"submit\">Submit</ion-button>\n      </div>\n    </form>\n   -->\n\n  \n</ion-content>"

/***/ }),

/***/ "./src/app/pages/post/post.scss":
/*!**************************************!*\
  !*** ./src/app/pages/post/post.scss ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".post-header {\n  background-color: var(--ion-color-dark);\n  padding: 16px;\n  width: 100%;\n  height: 30%;\n  text-align: center; }\n\n.post-header img {\n  max-height: 100%; }\n\n.post-info p {\n  color: var(--ion-color-dark);\n  text-align: left; }\n\n.post-info ion-icon {\n  -webkit-margin-end: 32px;\n          margin-inline-end: 32px; }\n\n.ios .post-info {\n  text-align: center; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9ndW5uaWxlL0lvbmljUHJvamVjdHMveW91cnN0YXIveW91cnN0YXIvc3JjL2FwcC9wYWdlcy9wb3N0L3Bvc3Quc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHVDQUF1QztFQUN2QyxhQUFhO0VBQ2IsV0FBVztFQUNYLFdBQVc7RUFDWCxrQkFBa0IsRUFBQTs7QUFHcEI7RUFDRSxnQkFBZ0IsRUFBQTs7QUFHbEI7RUFDRSw0QkFBNEI7RUFDNUIsZ0JBQWdCLEVBQUE7O0FBR2xCO0VBQ0Usd0JBQXVCO1VBQXZCLHVCQUF1QixFQUFBOztBQUd6QjtFQUNFLGtCQUFrQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvcG9zdC9wb3N0LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucG9zdC1oZWFkZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItZGFyayk7XG4gIHBhZGRpbmc6IDE2cHg7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDMwJTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4ucG9zdC1oZWFkZXIgaW1nIHtcbiAgbWF4LWhlaWdodDogMTAwJTtcbn1cblxuLnBvc3QtaW5mbyBwIHtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1kYXJrKTtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbn1cblxuLnBvc3QtaW5mbyBpb24taWNvbiB7XG4gIG1hcmdpbi1pbmxpbmUtZW5kOiAzMnB4O1xufVxuXG4uaW9zIC5wb3N0LWluZm8ge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/pages/post/post.ts":
/*!************************************!*\
  !*** ./src/app/pages/post/post.ts ***!
  \************************************/
/*! exports provided: PostPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostPage", function() { return PostPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_providers_type_data__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/providers/type-data */ "./src/app/providers/type-data.ts");





var PostPage = /** @class */ (function () {
    function PostPage(route, dataProvider, toastCtrl) {
        this.route = route;
        this.dataProvider = dataProvider;
        this.toastCtrl = toastCtrl;
        this.conferenceDate = '2047-05-17';
    }
    PostPage.prototype.ionViewWillEnter = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var toast;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.typeId = this.route.snapshot.queryParams.type;
                        this.star = this.route.snapshot.queryParams;
                        this.dataProvider.load(this.typeId).subscribe(function (data) {
                            _this.scoreNames = data;
                        });
                        return [4 /*yield*/, this.toastCtrl.create({
                                message: 'This does not actually send a support request.',
                                duration: 3000
                            })];
                    case 1:
                        toast = _a.sent();
                        return [4 /*yield*/, toast.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    PostPage.prototype.submit = function (form) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var toast;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.submitted = true;
                        if (!form.valid) return [3 /*break*/, 3];
                        this.supportMessage = '';
                        this.submitted = false;
                        return [4 /*yield*/, this.toastCtrl.create({
                                message: 'Your support request has been sent.',
                                duration: 3000
                            })];
                    case 1:
                        toast = _a.sent();
                        return [4 /*yield*/, toast.present()];
                    case 2:
                        _a.sent();
                        _a.label = 3;
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    PostPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'page-post',
            template: __webpack_require__(/*! ./post.html */ "./src/app/pages/post/post.html"),
            styles: [__webpack_require__(/*! ./post.scss */ "./src/app/pages/post/post.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            src_app_providers_type_data__WEBPACK_IMPORTED_MODULE_4__["TypeData"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"]])
    ], PostPage);
    return PostPage;
}());



/***/ }),

/***/ "./src/app/pages/star-detail/star-detail-routing.module.ts":
/*!*****************************************************************!*\
  !*** ./src/app/pages/star-detail/star-detail-routing.module.ts ***!
  \*****************************************************************/
/*! exports provided: StarDetailPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StarDetailPageRoutingModule", function() { return StarDetailPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _star_detail__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./star-detail */ "./src/app/pages/star-detail/star-detail.ts");
/* harmony import */ var _post_post__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../post/post */ "./src/app/pages/post/post.ts");





var routes = [
    { path: '', component: _star_detail__WEBPACK_IMPORTED_MODULE_3__["StarDetailPage"] },
    { path: 'post', component: _post_post__WEBPACK_IMPORTED_MODULE_4__["PostPage"] }
];
var StarDetailPageRoutingModule = /** @class */ (function () {
    function StarDetailPageRoutingModule() {
    }
    StarDetailPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], StarDetailPageRoutingModule);
    return StarDetailPageRoutingModule;
}());



/***/ }),

/***/ "./src/app/pages/star-detail/star-detail.html":
/*!****************************************************!*\
  !*** ./src/app/pages/star-detail/star-detail.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"/app/tabs/stars\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>{{star?.name}}</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"ion-padding star-detail\">\n  <div *ngIf=\"star\" class=\"ion-text-center\">\n    <img *ngIf=\"star.image\" [src]=\"star.image\" [alt]=\"star.name\">\n    <br>\n\n    <ion-button fill=\"clear\" size=\"small\" color=\"twitter\">\n      <ion-icon name=\"logo-twitter\" slot=\"icon-only\"></ion-icon>\n    </ion-button>\n    <ion-button fill=\"clear\" size=\"small\" color=\"github\">\n      <ion-icon name=\"logo-github\" slot=\"icon-only\"></ion-icon>\n    </ion-button>\n    <ion-button fill=\"clear\" size=\"small\" color=\"instagram\">\n      <ion-icon name=\"logo-instagram\" slot=\"icon-only\"></ion-icon>\n    </ion-button>\n  </div>\n\n  <p>{{star?.description}}</p>\n\n  <canvas id=\"raderChart \"#raderChart\n    width= \"400\"\n    height= \"500\">\n  </canvas>\n\n  <ion-button *ngIf=\"star\" expand=\"block\" (click) = goToPost(star) >\n    Your Stars Score\n  </ion-button>\n\n</ion-content>\n\n\n\n"

/***/ }),

/***/ "./src/app/pages/star-detail/star-detail.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/pages/star-detail/star-detail.module.ts ***!
  \*********************************************************/
/*! exports provided: StarDetailModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StarDetailModule", function() { return StarDetailModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _star_detail__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./star-detail */ "./src/app/pages/star-detail/star-detail.ts");
/* harmony import */ var _star_detail_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./star-detail-routing.module */ "./src/app/pages/star-detail/star-detail-routing.module.ts");
/* harmony import */ var ng2_charts__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng2-charts */ "./node_modules/ng2-charts/fesm5/ng2-charts.js");
/* harmony import */ var ionic4_star_rating__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ionic4-star-rating */ "./node_modules/ionic4-star-rating/dist/index.js");
/* harmony import */ var _post_post_routing_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../post/post-routing.module */ "./src/app/pages/post/post-routing.module.ts");
/* harmony import */ var _post_post__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../post/post */ "./src/app/pages/post/post.ts");











var StarDetailModule = /** @class */ (function () {
    function StarDetailModule() {
    }
    StarDetailModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                ng2_charts__WEBPACK_IMPORTED_MODULE_7__["ChartsModule"],
                _star_detail_routing_module__WEBPACK_IMPORTED_MODULE_6__["StarDetailPageRoutingModule"],
                _post_post_routing_module__WEBPACK_IMPORTED_MODULE_9__["PostPageRoutingModule"]
            ],
            exports: [
                ng2_charts__WEBPACK_IMPORTED_MODULE_7__["ChartsModule"],
                ionic4_star_rating__WEBPACK_IMPORTED_MODULE_8__["StarRating"],
                _post_post__WEBPACK_IMPORTED_MODULE_10__["PostPage"]
            ],
            declarations: [
                _star_detail__WEBPACK_IMPORTED_MODULE_5__["StarDetailPage"],
                ionic4_star_rating__WEBPACK_IMPORTED_MODULE_8__["StarRating"],
                _post_post__WEBPACK_IMPORTED_MODULE_10__["PostPage"]
            ]
        })
    ], StarDetailModule);
    return StarDetailModule;
}());



/***/ }),

/***/ "./src/app/pages/star-detail/star-detail.scss":
/*!****************************************************!*\
  !*** ./src/app/pages/star-detail/star-detail.scss ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".star-detail img {\n  max-width: 140px;\n  border-radius: 50%; }\n\n.star-detail p {\n  color: #60646b; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9ndW5uaWxlL0lvbmljUHJvamVjdHMveW91cnN0YXIveW91cnN0YXIvc3JjL2FwcC9wYWdlcy9zdGFyLWRldGFpbC9zdGFyLWRldGFpbC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGtCQUFrQixFQUFBOztBQUdwQjtFQUNFLGNBQWMsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3N0YXItZGV0YWlsL3N0YXItZGV0YWlsLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc3Rhci1kZXRhaWwgaW1nIHtcbiAgbWF4LXdpZHRoOiAxNDBweDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xufVxuXG4uc3Rhci1kZXRhaWwgcCB7XG4gIGNvbG9yOiAjNjA2NDZiO1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/pages/star-detail/star-detail.ts":
/*!**************************************************!*\
  !*** ./src/app/pages/star-detail/star-detail.ts ***!
  \**************************************************/
/*! exports provided: StarDetailPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StarDetailPage", function() { return StarDetailPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _providers_star_detail_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../providers/star-detail-data */ "./src/app/providers/star-detail-data.ts");
/* harmony import */ var chart_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! chart.js */ "./node_modules/chart.js/dist/Chart.js");
/* harmony import */ var chart_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(chart_js__WEBPACK_IMPORTED_MODULE_4__);





var StarDetailPage = /** @class */ (function () {
    function StarDetailPage(dataProvider, router, route) {
        this.dataProvider = dataProvider;
        this.router = router;
        this.route = route;
        this.scores = [];
        this.score_names = [];
        this.score_list = [];
    }
    StarDetailPage.prototype.ionViewWillEnter = function () {
        var _this = this;
        this.scores = [];
        this.score_list = [];
        this.score_names = [];
        var starId = this.route.snapshot.paramMap.get('starId');
        this.dataProvider.load(starId).subscribe(function (data) {
            _this.star = data;
            _this.score_list = data.score_list;
            for (var _i = 0, _a = _this.score_list; _i < _a.length; _i++) {
                var score = _a[_i];
                _this.scores.push(score.score);
                _this.score_names.push(score.score_name);
            }
            _this.initChart();
        });
    };
    StarDetailPage.prototype.goToPost = function (star) {
        this.router.navigate(["../post"], { relativeTo: this.route, queryParams: star });
        // this.router.navigate(["../post"], type);
    };
    StarDetailPage.prototype.initChart = function () {
        this.barChart = new chart_js__WEBPACK_IMPORTED_MODULE_4__["Chart"](this.raderChart.nativeElement, {
            type: 'radar',
            data: {
                labels: this.score_names,
                datasets: [{
                        label: '# of card in use',
                        data: this.scores,
                        backgroundColor: 'rgba(54, 162, 235, 0.2)',
                        borderColor: 'rgba(54, 162, 235, 1)',
                        borderWidth: 2
                    }],
            },
            options: {
                scales: {
                    display: false,
                    ticks: {
                        min: 0,
                        max: 100,
                        beginAtZero: true
                    },
                    xAxes: [{
                            ticks: {
                                min: 0,
                                max: 100,
                                beginAtZero: true
                            },
                            scaleLabel: {
                                display: false
                            },
                            stacked: true
                        }],
                    yAxes: [{
                            ticks: {
                                min: 0,
                                max: 100,
                                beginAtZero: true
                            },
                            stacked: true,
                        }],
                },
                responsive: true
            }
        });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("raderChart"),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], StarDetailPage.prototype, "raderChart", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('rating'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], StarDetailPage.prototype, "rating", void 0);
    StarDetailPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'page-star-detail',
            template: __webpack_require__(/*! ./star-detail.html */ "./src/app/pages/star-detail/star-detail.html"),
            styles: [__webpack_require__(/*! ./star-detail.scss */ "./src/app/pages/star-detail/star-detail.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_providers_star_detail_data__WEBPACK_IMPORTED_MODULE_3__["StarDetailData"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], StarDetailPage);
    return StarDetailPage;
}());



/***/ }),

/***/ "./src/app/providers/star-detail-data.ts":
/*!***********************************************!*\
  !*** ./src/app/providers/star-detail-data.ts ***!
  \***********************************************/
/*! exports provided: StarDetailData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StarDetailData", function() { return StarDetailData; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _user_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./user-data */ "./src/app/providers/user-data.ts");




var StarDetailData = /** @class */ (function () {
    function StarDetailData(http, user) {
        this.http = http;
        this.user = user;
        this.url = '';
    }
    StarDetailData.prototype.load = function (starId) {
        this.url = 'http://127.0.0.1:8000/stars/';
        this.url = this.url + starId;
        this.data = this.http.get(this.url);
        return this.data;
    };
    StarDetailData = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"],
            _user_data__WEBPACK_IMPORTED_MODULE_3__["UserData"]])
    ], StarDetailData);
    return StarDetailData;
}());



/***/ }),

/***/ "./src/app/providers/type-data.ts":
/*!****************************************!*\
  !*** ./src/app/providers/type-data.ts ***!
  \****************************************/
/*! exports provided: TypeData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TypeData", function() { return TypeData; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _user_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./user-data */ "./src/app/providers/user-data.ts");




var TypeData = /** @class */ (function () {
    function TypeData(http, user) {
        this.http = http;
        this.user = user;
        this.url = '';
    }
    TypeData.prototype.load = function (typeId) {
        this.url = 'http://127.0.0.1:8000/scores/';
        this.url = this.url + typeId;
        this.data = this.http.get(this.url);
        return this.data;
    };
    TypeData = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"],
            _user_data__WEBPACK_IMPORTED_MODULE_3__["UserData"]])
    ], TypeData);
    return TypeData;
}());



/***/ })

}]);
//# sourceMappingURL=star-detail-star-detail-module.js.map