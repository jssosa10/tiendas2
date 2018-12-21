(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["list-list-module"],{

/***/ "./src/app/list/list.module.ts":
/*!*************************************!*\
  !*** ./src/app/list/list.module.ts ***!
  \*************************************/
/*! exports provided: ListPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListPageModule", function() { return ListPageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _list_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./list.page */ "./src/app/list/list.page.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var ListPageModule = /** @class */ (function () {
    function ListPageModule() {
    }
    ListPageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild([
                    {
                        path: '',
                        component: _list_page__WEBPACK_IMPORTED_MODULE_5__["ListPage"]
                    }
                ])
            ],
            declarations: [_list_page__WEBPACK_IMPORTED_MODULE_5__["ListPage"]]
        })
    ], ListPageModule);
    return ListPageModule;
}());



/***/ }),

/***/ "./src/app/list/list.page.html":
/*!*************************************!*\
  !*** ./src/app/list/list.page.html ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header no-border>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-img src=\"/assets/shapes.svg\"></ion-img>\n  <ion-list>\n    <ion-item *ngFor=\"let floor of floors\">\n      <div>\n        <h4>Piso {{floor.id}}</h4>\n          <ion-grid>\n            <ion-row>\n              <ion-col *ngFor=\"let store of floor.stores\" size=\"4\">\n                <ion-card>\n                    <ion-card-header>\n                        <ion-img src={{store.logo}}></ion-img>\n                      <ion-card-title class = \"medium\">{{store.name | uppercase}}</ion-card-title>\n                    </ion-card-header>\n                    <ion-card-content>\n                      <p class = \"small\" >{{store.description}}</p>\n                    </ion-card-content>\n                </ion-card>\n\n              </ion-col>\n            </ion-row>\n          </ion-grid>\n\n                \n      </div>\n    </ion-item>\n  </ion-list>\n  <!--\n    <div *ngIf=\"selectedItem\" padding>\n      You navigated here from <b>{{selectedItem.title }}</b>\n    </div>\n  -->\n</ion-content>\n"

/***/ }),

/***/ "./src/app/list/list.page.scss":
/*!*************************************!*\
  !*** ./src/app/list/list.page.scss ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-card {\n  text-align: center;\n  align-content: center;\n  align-self: center;\n  width: 100%;\n  margin: 0 !important;\n  padding: 5 !important; }\n\n.small {\n  font-size: 2vw; }\n\n.medium {\n  font-size: 3.3vw; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2pzL2lvbmljL3RpZW5kYXMvc3JjL2FwcC9saXN0L2xpc3QucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksbUJBQWtCO0VBQ3JCLHNCQUFxQjtFQUNyQixtQkFBa0I7RUFDZixZQUFVO0VBQ1YscUJBQW9CO0VBQ3BCLHNCQUFxQixFQUN4Qjs7QUFDRDtFQUNJLGVBQWMsRUFDakI7O0FBQ0Q7RUFDSSxpQkFBZ0IsRUFDbkIiLCJmaWxlIjoic3JjL2FwcC9saXN0L2xpc3QucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWNhcmQge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcblx0YWxpZ24tY29udGVudDogY2VudGVyO1xuXHRhbGlnbi1zZWxmOiBjZW50ZXI7XG4gICAgd2lkdGg6MTAwJTtcbiAgICBtYXJnaW46IDAgIWltcG9ydGFudDtcbiAgICBwYWRkaW5nOiA1ICFpbXBvcnRhbnQ7XG59XG4uc21hbGx7XG4gICAgZm9udC1zaXplOiAydnc7XG59XG4ubWVkaXVte1xuICAgIGZvbnQtc2l6ZTogMy4zdnc7XG59Il19 */"

/***/ }),

/***/ "./src/app/list/list.page.ts":
/*!***********************************!*\
  !*** ./src/app/list/list.page.ts ***!
  \***********************************/
/*! exports provided: ListPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListPage", function() { return ListPage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ListPage = /** @class */ (function () {
    function ListPage(http) {
        this.http = http;
        this.loadData();
    }
    ListPage.prototype.ngOnInit = function () {
    };
    // function to load data (actually local data) from a JSON API change location to API end point
    ListPage.prototype.loadData = function () {
        var _this = this;
        this.http.get('assets/data/testData.json').subscribe(function (res) {
            console.log(res);
            var data = res;
            _this.floors = data.pisos;
        });
    };
    ListPage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-list',
            template: __webpack_require__(/*! ./list.page.html */ "./src/app/list/list.page.html"),
            styles: [__webpack_require__(/*! ./list.page.scss */ "./src/app/list/list.page.scss")]
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], ListPage);
    return ListPage;
}());



/***/ })

}]);
//# sourceMappingURL=list-list-module.js.map