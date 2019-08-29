(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["common"],{

/***/ "./node_modules/@ionic/core/dist/esm-es5/chunk-4e92c885.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm-es5/chunk-4e92c885.js ***!
  \*****************************************************************/
/*! exports provided: a, b, c, h */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return hapticSelectionStart; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return hapticSelectionChanged; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return hapticSelectionEnd; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return hapticSelection; });
/**
 * Check to see if the Haptic Plugin is available
 * @return Returns `true` or false if the plugin is available
 */
/**
 * Trigger a selection changed haptic event. Good for one-time events
 * (not for gestures)
 */
var hapticSelection = function () {
    var engine = window.TapticEngine;
    if (engine) {
        engine.selection();
    }
};
/**
 * Tell the haptic engine that a gesture for a selection change is starting.
 */
var hapticSelectionStart = function () {
    var engine = window.TapticEngine;
    if (engine) {
        engine.gestureSelectionStart();
    }
};
/**
 * Tell the haptic engine that a selection changed during a gesture.
 */
var hapticSelectionChanged = function () {
    var engine = window.TapticEngine;
    if (engine) {
        engine.gestureSelectionChanged();
    }
};
/**
 * Tell the haptic engine we are done with a gesture. This needs to be
 * called lest resources are not properly recycled.
 */
var hapticSelectionEnd = function () {
    var engine = window.TapticEngine;
    if (engine) {
        engine.gestureSelectionEnd();
    }
};



/***/ }),

/***/ "./node_modules/@ionic/core/dist/esm-es5/chunk-ba834eff.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm-es5/chunk-ba834eff.js ***!
  \*****************************************************************/
/*! exports provided: c, g, h, o */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return createColorClasses; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return getClassMap; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return hostContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "o", function() { return openURL; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
var _this = undefined;

var hostContext = function (selector, el) {
    return el.closest(selector) !== null;
};
/**
 * Create the mode and color classes for the component based on the classes passed in
 */
var createColorClasses = function (color) {
    var _a;
    return (typeof color === 'string' && color.length > 0) ? (_a = {
            'ion-color': true
        },
        _a["ion-color-" + color] = true,
        _a) : undefined;
};
var getClassList = function (classes) {
    if (classes !== undefined) {
        var array = Array.isArray(classes) ? classes : classes.split(' ');
        return array
            .filter(function (c) { return c != null; })
            .map(function (c) { return c.trim(); })
            .filter(function (c) { return c !== ''; });
    }
    return [];
};
var getClassMap = function (classes) {
    var map = {};
    getClassList(classes).forEach(function (c) { return map[c] = true; });
    return map;
};
var SCHEME = /^[a-z][a-z0-9+\-.]*:/;
var openURL = function (url, ev, direction) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
    var router;
    return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
        switch (_a.label) {
            case 0:
                if (!(url != null && url[0] !== '#' && !SCHEME.test(url))) return [3 /*break*/, 2];
                router = document.querySelector('ion-router');
                if (!router) return [3 /*break*/, 2];
                if (ev != null) {
                    ev.preventDefault();
                }
                return [4 /*yield*/, router.componentOnReady()];
            case 1:
                _a.sent();
                return [2 /*return*/, router.push(url, direction)];
            case 2: return [2 /*return*/, false];
        }
    });
}); };



/***/ }),

/***/ "./node_modules/@ionic/core/dist/esm-es5/chunk-c90aaa66.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm-es5/chunk-c90aaa66.js ***!
  \*****************************************************************/
/*! exports provided: a, b, c, d, e, f, h, i, n, p, r */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return rIC; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return assert; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return clamp; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return debounceEvent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return debounce; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return findItemLabel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return hasShadowDom; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return isEndSide; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "n", function() { return now; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "p", function() { return pointerCoord; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "r", function() { return renderHiddenInput; });
var rIC = function (callback) {
    if ('requestIdleCallback' in window) {
        window.requestIdleCallback(callback);
    }
    else {
        setTimeout(callback, 32);
    }
};
var hasShadowDom = function (el) {
    return !!el.shadowRoot && !!el.attachShadow;
};
var findItemLabel = function (componentEl) {
    var itemEl = componentEl.closest('ion-item');
    if (itemEl) {
        return itemEl.querySelector('ion-label');
    }
    return null;
};
var renderHiddenInput = function (always, container, name, value, disabled) {
    if (always || hasShadowDom(container)) {
        var input = container.querySelector('input.aux-input');
        if (!input) {
            input = container.ownerDocument.createElement('input');
            input.type = 'hidden';
            input.classList.add('aux-input');
            container.appendChild(input);
        }
        input.disabled = disabled;
        input.name = name;
        input.value = value || '';
    }
};
var clamp = function (min, n, max) {
    return Math.max(min, Math.min(n, max));
};
var assert = function (actual, reason) {
    if (!actual) {
        var message = 'ASSERT: ' + reason;
        console.error(message);
        debugger; // tslint:disable-line
        throw new Error(message);
    }
};
var now = function (ev) {
    return ev.timeStamp || Date.now();
};
var pointerCoord = function (ev) {
    // get X coordinates for either a mouse click
    // or a touch depending on the given event
    if (ev) {
        var changedTouches = ev.changedTouches;
        if (changedTouches && changedTouches.length > 0) {
            var touch = changedTouches[0];
            return { x: touch.clientX, y: touch.clientY };
        }
        if (ev.pageX !== undefined) {
            return { x: ev.pageX, y: ev.pageY };
        }
    }
    return { x: 0, y: 0 };
};
/**
 * @hidden
 * Given a side, return if it should be on the end
 * based on the value of dir
 * @param side the side
 * @param isRTL whether the application dir is rtl
 */
var isEndSide = function (side) {
    var isRTL = document.dir === 'rtl';
    switch (side) {
        case 'start': return isRTL;
        case 'end': return !isRTL;
        default:
            throw new Error("\"" + side + "\" is not a valid value for [side]. Use \"start\" or \"end\" instead.");
    }
};
var debounceEvent = function (event, wait) {
    var original = event._original || event;
    return {
        _original: event,
        emit: debounce(original.emit.bind(original), wait)
    };
};
var debounce = function (func, wait) {
    if (wait === void 0) { wait = 0; }
    var timer;
    return function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        clearTimeout(timer);
        timer = setTimeout.apply(void 0, [func, wait].concat(args));
    };
};



/***/ }),

/***/ "./node_modules/@ionic/core/dist/esm-es5/chunk-cae2ca23.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm-es5/chunk-cae2ca23.js ***!
  \*****************************************************************/
/*! exports provided: s */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "s", function() { return sanitizeDOMString; });
/**
 * Does a simple sanitization of all elements
 * in an untrusted string
 */
var sanitizeDOMString = function (untrustedString) {
    try {
        if (typeof untrustedString !== 'string' || untrustedString === '') {
            return untrustedString;
        }
        /**
         * Create a document fragment
         * separate from the main DOM,
         * create a div to do our work in
         */
        var documentFragment_1 = document.createDocumentFragment();
        var workingDiv = document.createElement('div');
        documentFragment_1.appendChild(workingDiv);
        workingDiv.innerHTML = untrustedString;
        /**
         * Remove any elements
         * that are blocked
         */
        blockedTags.forEach(function (blockedTag) {
            var getElementsToRemove = documentFragment_1.querySelectorAll(blockedTag);
            for (var elementIndex = getElementsToRemove.length - 1; elementIndex >= 0; elementIndex--) {
                var element = getElementsToRemove[elementIndex];
                if (element.parentNode) {
                    element.parentNode.removeChild(element);
                }
                else {
                    documentFragment_1.removeChild(element);
                }
                /**
                 * We still need to sanitize
                 * the children of this element
                 * as they are left behind
                 */
                var childElements = getElementChildren(element);
                /* tslint:disable-next-line */
                for (var childIndex = 0; childIndex < childElements.length; childIndex++) {
                    sanitizeElement(childElements[childIndex]);
                }
            }
        });
        /**
         * Go through remaining elements and remove
         * non-allowed attribs
         */
        // IE does not support .children on document fragments, only .childNodes
        var documentFragmentChildren = getElementChildren(documentFragment_1);
        /* tslint:disable-next-line */
        for (var childIndex = 0; childIndex < documentFragmentChildren.length; childIndex++) {
            sanitizeElement(documentFragmentChildren[childIndex]);
        }
        // Append document fragment to div
        var fragmentDiv = document.createElement('div');
        fragmentDiv.appendChild(documentFragment_1);
        // First child is always the div we did our work in
        var getInnerDiv = fragmentDiv.querySelector('div');
        return (getInnerDiv !== null) ? getInnerDiv.innerHTML : fragmentDiv.innerHTML;
    }
    catch (err) {
        console.error(err);
        return '';
    }
};
/**
 * Clean up current element based on allowed attributes
 * and then recursively dig down into any child elements to
 * clean those up as well
 */
var sanitizeElement = function (element) {
    // IE uses childNodes, so ignore nodes that are not elements
    if (element.nodeType && element.nodeType !== 1) {
        return;
    }
    for (var i = element.attributes.length - 1; i >= 0; i--) {
        var attribute = element.attributes[i];
        var attributeName = attribute.name;
        // remove non-allowed attribs
        if (!allowedAttributes.includes(attributeName.toLowerCase())) {
            element.removeAttribute(attributeName);
            continue;
        }
        // clean up any allowed attribs
        // that attempt to do any JS funny-business
        var attributeValue = attribute.value;
        /* tslint:disable-next-line */
        if (attributeValue != null && attributeValue.toLowerCase().includes('javascript:')) {
            element.removeAttribute(attributeName);
        }
    }
    /**
     * Sanitize any nested children
     */
    var childElements = getElementChildren(element);
    /* tslint:disable-next-line */
    for (var i = 0; i < childElements.length; i++) {
        sanitizeElement(childElements[i]);
    }
};
/**
 * IE doesn't always support .children
 * so we revert to .childNodes instead
 */
var getElementChildren = function (element) {
    return (element.children != null) ? element.children : element.childNodes;
};
var allowedAttributes = ['class', 'id', 'href', 'src', 'name', 'slot'];
var blockedTags = ['script', 'style', 'iframe', 'meta', 'link', 'object', 'embed'];



/***/ }),

/***/ "./src/app/pages/about-popover/about-popover.ts":
/*!******************************************************!*\
  !*** ./src/app/pages/about-popover/about-popover.ts ***!
  \******************************************************/
/*! exports provided: PopoverPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PopoverPage", function() { return PopoverPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");



var PopoverPage = /** @class */ (function () {
    function PopoverPage(popoverCtrl) {
        this.popoverCtrl = popoverCtrl;
    }
    PopoverPage.prototype.support = function () {
        // this.app.getRootNavs()[0].push('/support');
        this.popoverCtrl.dismiss();
    };
    PopoverPage.prototype.close = function (url) {
        window.open(url, '_blank');
        this.popoverCtrl.dismiss();
    };
    PopoverPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            template: "\n    <ion-list>\n      <ion-item button (click)=\"close('https://ionicframework.com/getting-started')\">\n        <ion-label>Learn Ionic</ion-label>\n      </ion-item>\n      <ion-item button (click)=\"close('https://ionicframework.com/docs/')\">\n        <ion-label>Documentation</ion-label>\n      </ion-item>\n      <ion-item button (click)=\"close('https://showcase.ionicframework.com')\">\n        <ion-label>Showcase</ion-label>\n      </ion-item>\n      <ion-item button (click)=\"close('https://github.com/ionic-team/ionic')\">\n        <ion-label>GitHub Repo</ion-label>\n      </ion-item>\n      <ion-item button (click)=\"support()\">\n        <ion-label>Support</ion-label>\n      </ion-item>\n    </ion-list>\n  "
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["PopoverController"]])
    ], PopoverPage);
    return PopoverPage;
}());



/***/ }),

/***/ "./src/app/pages/about/about-routing.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/pages/about/about-routing.module.ts ***!
  \*****************************************************/
/*! exports provided: AboutPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutPageRoutingModule", function() { return AboutPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _about__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./about */ "./src/app/pages/about/about.ts");




var routes = [
    {
        path: '',
        component: _about__WEBPACK_IMPORTED_MODULE_3__["AboutPage"]
    }
];
var AboutPageRoutingModule = /** @class */ (function () {
    function AboutPageRoutingModule() {
    }
    AboutPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AboutPageRoutingModule);
    return AboutPageRoutingModule;
}());



/***/ }),

/***/ "./src/app/pages/about/about.html":
/*!****************************************!*\
  !*** ./src/app/pages/about/about.html ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title>About</ion-title>\n    <ion-buttons slot=\"end\">\n      <ion-button (click)=\"presentPopover($event)\">\n        <ion-icon slot=\"icon-only\" name=\"more\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div class=\"about-header\">\n    <img src=\"assets/img/ionic-logo-white.svg\" alt=\"ionic logo\">\n  </div>\n  <div class=\"about-info\">\n    <h4 class=\"ion-padding-start\">Ionic Conference</h4>\n\n    <ion-list lines=\"none\">\n      <ion-item>\n        <ion-icon name=\"calendar\" slot=\"start\"></ion-icon>\n        <ion-label position=\"stacked\">Date</ion-label>\n        <ion-datetime displayFormat=\"MMM DD, YYYY\" max=\"2056\" [(ngModel)]=\"conferenceDate\"></ion-datetime>\n      </ion-item>\n\n      <ion-item>\n        <ion-icon name=\"pin\" slot=\"start\"></ion-icon>\n        <ion-label position=\"stacked\">Location</ion-label>\n        <ion-select>\n          <ion-select-option value=\"madison\" selected>Madison, WI</ion-select-option>\n          <ion-select-option value=\"austin\">Austin, TX</ion-select-option>\n          <ion-select-option value=\"chicago\">Chicago, IL</ion-select-option>\n          <ion-select-option value=\"seattle\">Seattle, WA</ion-select-option>\n        </ion-select>\n      </ion-item>\n    </ion-list>\n\n    <p class=\"ion-padding-start ion-padding-end\">\n      The Ionic Conference is a one-day conference featuring talks from the Ionic team. It is focused on Ionic applications being\n      built with Ionic 2. This includes migrating apps from Ionic 1 to Ionic 2, Angular concepts, Webpack, Sass, and many\n      other technologies used in Ionic 2. Tickets are completely sold out, and we’re expecting more than 1000 developers\n      – making this the largest Ionic conference ever!\n    </p>\n  </div>\n\n  \n</ion-content>\n"

/***/ }),

/***/ "./src/app/pages/about/about.module.ts":
/*!*********************************************!*\
  !*** ./src/app/pages/about/about.module.ts ***!
  \*********************************************/
/*! exports provided: AboutModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutModule", function() { return AboutModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _about__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./about */ "./src/app/pages/about/about.ts");
/* harmony import */ var _about_popover_about_popover__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../about-popover/about-popover */ "./src/app/pages/about-popover/about-popover.ts");
/* harmony import */ var _about_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./about-routing.module */ "./src/app/pages/about/about-routing.module.ts");
/* harmony import */ var ng2_charts__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ng2-charts */ "./node_modules/ng2-charts/fesm5/ng2-charts.js");









var AboutModule = /** @class */ (function () {
    function AboutModule() {
    }
    AboutModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                ng2_charts__WEBPACK_IMPORTED_MODULE_8__["ChartsModule"],
                _about_routing_module__WEBPACK_IMPORTED_MODULE_7__["AboutPageRoutingModule"]
            ],
            exports: [
                ng2_charts__WEBPACK_IMPORTED_MODULE_8__["ChartsModule"]
            ],
            declarations: [_about__WEBPACK_IMPORTED_MODULE_5__["AboutPage"], _about_popover_about_popover__WEBPACK_IMPORTED_MODULE_6__["PopoverPage"]],
            entryComponents: [_about_popover_about_popover__WEBPACK_IMPORTED_MODULE_6__["PopoverPage"]],
            bootstrap: [_about__WEBPACK_IMPORTED_MODULE_5__["AboutPage"]],
        })
    ], AboutModule);
    return AboutModule;
}());



/***/ }),

/***/ "./src/app/pages/about/about.scss":
/*!****************************************!*\
  !*** ./src/app/pages/about/about.scss ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".about-header {\n  background-color: var(--ion-color-dark);\n  padding: 16px;\n  width: 100%;\n  height: 30%;\n  text-align: center; }\n\n.about-header img {\n  max-height: 100%; }\n\n.about-info p {\n  color: var(--ion-color-dark);\n  text-align: left; }\n\n.about-info ion-icon {\n  -webkit-margin-end: 32px;\n          margin-inline-end: 32px; }\n\n.ios .about-info {\n  text-align: center; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9ndW5uaWxlL0lvbmljUHJvamVjdHMveW91cnN0YXIveW91cnN0YXIvc3JjL2FwcC9wYWdlcy9hYm91dC9hYm91dC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsdUNBQXVDO0VBQ3ZDLGFBQWE7RUFDYixXQUFXO0VBQ1gsV0FBVztFQUNYLGtCQUFrQixFQUFBOztBQUdwQjtFQUNFLGdCQUFnQixFQUFBOztBQUdsQjtFQUNFLDRCQUE0QjtFQUM1QixnQkFBZ0IsRUFBQTs7QUFHbEI7RUFDRSx3QkFBdUI7VUFBdkIsdUJBQXVCLEVBQUE7O0FBR3pCO0VBQ0Usa0JBQWtCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9hYm91dC9hYm91dC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmFib3V0LWhlYWRlciB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWlvbi1jb2xvci1kYXJrKTtcbiAgcGFkZGluZzogMTZweDtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMzAlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5hYm91dC1oZWFkZXIgaW1nIHtcbiAgbWF4LWhlaWdodDogMTAwJTtcbn1cblxuLmFib3V0LWluZm8gcCB7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItZGFyayk7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG59XG5cbi5hYm91dC1pbmZvIGlvbi1pY29uIHtcbiAgbWFyZ2luLWlubGluZS1lbmQ6IDMycHg7XG59XG5cbi5pb3MgLmFib3V0LWluZm8ge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/pages/about/about.ts":
/*!**************************************!*\
  !*** ./src/app/pages/about/about.ts ***!
  \**************************************/
/*! exports provided: AboutPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutPage", function() { return AboutPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _about_popover_about_popover__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../about-popover/about-popover */ "./src/app/pages/about-popover/about-popover.ts");




var AboutPage = /** @class */ (function () {
    function AboutPage(popoverCtrl) {
        this.popoverCtrl = popoverCtrl;
        this.conferenceDate = '2047-05-17';
    }
    AboutPage.prototype.presentPopover = function (event) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var popover;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.popoverCtrl.create({
                            component: _about_popover_about_popover__WEBPACK_IMPORTED_MODULE_3__["PopoverPage"],
                            event: event
                        })];
                    case 1:
                        popover = _a.sent();
                        return [4 /*yield*/, popover.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    AboutPage.prototype.ionViewWillEnter = function () {
    };
    AboutPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'page-about',
            template: __webpack_require__(/*! ./about.html */ "./src/app/pages/about/about.html"),
            styles: [__webpack_require__(/*! ./about.scss */ "./src/app/pages/about/about.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["PopoverController"]])
    ], AboutPage);
    return AboutPage;
}());



/***/ })

}]);
//# sourceMappingURL=common.js.map