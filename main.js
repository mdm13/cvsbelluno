(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Navigation -->\r\n<nav class=\"navbar navbar-expand-lg navbar-dark bg-dark fixed-bottom\">\r\n  <div class=\"container\">\r\n    <a class=\"navbar-brand\" href=\"http://www.cvsonline.it/\">Cooperativa Veneta Scout</a>\r\n    <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarResponsive\" aria-controls=\"navbarResponsive\"\r\n      aria-expanded=\"false\" aria-label=\"Toggle navigation\">\r\n      <span class=\"navbar-toggler-icon\"></span>\r\n    </button>\r\n\r\n    <div class=\"collapse navbar-collapse\" id=\"navbarResponsive\">\r\n      <ul class=\"navbar-nav ml-auto\">\r\n        <li class=\"nav-item\">\r\n          <a class=\"nav-link\" routerLink=\"/home\" routerLinkActive=\"active\">Home\r\n            <span class=\"sr-only\">(current)</span>\r\n          </a>\r\n        </li>\r\n\r\n        <li class=\"nav-item\">\r\n          <a class=\"nav-link\" routerLink=\"/dovesiamo\" routerLinkActive=\"active\">Dove Siamo</a>\r\n        </li>\r\n\r\n        <li class=\"nav-item\">\r\n          <a class=\"nav-link\" routerLink=\"/articoli\" routerLinkActive=\"active\">Articoli</a>\r\n        </li>\r\n      </ul>\r\n    </div>\r\n  </div>\r\n</nav>\r\n\r\n\r\n<!-- Page Content -->\r\n<router-outlet></router-outlet>"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _dovesiamo_dovesiamo_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./dovesiamo/dovesiamo.component */ "./src/app/dovesiamo/dovesiamo.component.ts");
/* harmony import */ var _articoli_articoli_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./articoli/articoli.component */ "./src/app/articoli/articoli.component.ts");
/* harmony import */ var _page_not_found_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./page-not-found.component */ "./src/app/page-not-found.component.ts");
/* harmony import */ var _app_routes__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./app.routes */ "./src/app/app.routes.ts");
/* harmony import */ var _agm_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @agm/core */ "./node_modules/@agm/core/index.js");
/* harmony import */ var _services_orari_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./services/orari.service */ "./src/app/services/orari.service.ts");
/* harmony import */ var _services_articoli_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./services/articoli.service */ "./src/app/services/articoli.service.ts");






//featured components





//other imports




var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_7__["HomeComponent"],
                _page_not_found_component__WEBPACK_IMPORTED_MODULE_10__["PageNotFoundComponent"],
                _dovesiamo_dovesiamo_component__WEBPACK_IMPORTED_MODULE_8__["DovesiamoComponent"],
                _articoli_articoli_component__WEBPACK_IMPORTED_MODULE_9__["ArticoliComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forRoot(_app_routes__WEBPACK_IMPORTED_MODULE_11__["appRoutes"], { useHash: true }),
                _agm_core__WEBPACK_IMPORTED_MODULE_12__["AgmCoreModule"].forRoot({
                    apiKey: 'AIzaSyBzjPkh-Cfv1BrLIbqsOe_f3pbSsZuZ9U8'
                }),
                _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"]
            ],
            providers: [_services_orari_service__WEBPACK_IMPORTED_MODULE_13__["OrariService"], _services_articoli_service__WEBPACK_IMPORTED_MODULE_14__["ArticoliService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/app.routes.ts":
/*!*******************************!*\
  !*** ./src/app/app.routes.ts ***!
  \*******************************/
/*! exports provided: appRoutes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "appRoutes", function() { return appRoutes; });
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _dovesiamo_dovesiamo_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dovesiamo/dovesiamo.component */ "./src/app/dovesiamo/dovesiamo.component.ts");
/* harmony import */ var _articoli_articoli_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./articoli/articoli.component */ "./src/app/articoli/articoli.component.ts");
/* harmony import */ var _page_not_found_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./page-not-found.component */ "./src/app/page-not-found.component.ts");




var appRoutes = [
    { path: 'home', component: _home_home_component__WEBPACK_IMPORTED_MODULE_0__["HomeComponent"] },
    { path: 'dovesiamo', component: _dovesiamo_dovesiamo_component__WEBPACK_IMPORTED_MODULE_1__["DovesiamoComponent"] },
    { path: 'articoli', component: _articoli_articoli_component__WEBPACK_IMPORTED_MODULE_2__["ArticoliComponent"] },
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: '**', component: _page_not_found_component__WEBPACK_IMPORTED_MODULE_3__["PageNotFoundComponent"] }
];


/***/ }),

/***/ "./src/app/articoli/articoli.component.html":
/*!**************************************************!*\
  !*** ./src/app/articoli/articoli.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section>\r\n    <div class=\"container\">\r\n        <div class=\"row\">\r\n            <div class=\"col-lg-6 main-title\">\r\n                <h1>{{ title }}</h1>\r\n\r\n                <div class=\"form-group\">\r\n                    <label for=\"filtroArticoli\">Cerca</label>\r\n                    <input type=\"text\" class=\"form-control\" id=\"filtroArticoli\"\r\n                        placeholder=\"Codice o descrizione articolo\" [(ngModel)]=\"textValue\" name=\"filtro\">\r\n                </div>\r\n\r\n\r\n                <table class=\"table table-striped table-dark\">\r\n                    <thead>\r\n                        <tr>\r\n                            <th scope=\"col\">Descrizione</th>\r\n                            <th scope=\"col\">Giacenza</th>\r\n                        </tr>\r\n                    </thead>\r\n                    <tbody>\r\n                        <tr *ngFor=\"let item of articoli\">\r\n                            <td>({{item.codice}}) {{item.descrizione}}</td>\r\n                            <td>{{item.giacenza}}</td>\r\n                        </tr>\r\n                    </tbody>\r\n                </table>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</section>"

/***/ }),

/***/ "./src/app/articoli/articoli.component.ts":
/*!************************************************!*\
  !*** ./src/app/articoli/articoli.component.ts ***!
  \************************************************/
/*! exports provided: ArticoliComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArticoliComponent", function() { return ArticoliComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_articoli_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/articoli.service */ "./src/app/services/articoli.service.ts");



var ArticoliComponent = /** @class */ (function () {
    function ArticoliComponent(articoliService) {
        this.articoliService = articoliService;
        this.title = 'Articoli';
        this.textValue = '';
    }
    Object.defineProperty(ArticoliComponent.prototype, "articoli", {
        get: function () {
            var list = this.articoliService.getArticoli();
            if (this.textValue) {
                var str_1 = this.textValue.toLowerCase();
                list = list.filter(function (a) { return a.codice.toLowerCase().includes(str_1) || a.descrizione.toLowerCase().includes(str_1); });
            }
            return list;
        },
        enumerable: true,
        configurable: true
    });
    ArticoliComponent.prototype.ngOnInit = function () {
    };
    ArticoliComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-articoli',
            template: __webpack_require__(/*! ./articoli.component.html */ "./src/app/articoli/articoli.component.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_articoli_service__WEBPACK_IMPORTED_MODULE_2__["ArticoliService"]])
    ], ArticoliComponent);
    return ArticoliComponent;
}());



/***/ }),

/***/ "./src/app/dovesiamo/dovesiamo.component.css":
/*!***************************************************!*\
  !*** ./src/app/dovesiamo/dovesiamo.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "agm-map {\r\n  height: 300px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZG92ZXNpYW1vL2RvdmVzaWFtby5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsY0FBYztDQUNmIiwiZmlsZSI6InNyYy9hcHAvZG92ZXNpYW1vL2RvdmVzaWFtby5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiYWdtLW1hcCB7XHJcbiAgaGVpZ2h0OiAzMDBweDtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/dovesiamo/dovesiamo.component.html":
/*!****************************************************!*\
  !*** ./src/app/dovesiamo/dovesiamo.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section>\r\n    <div class=\"container\">\r\n        <div class=\"row\">\r\n            <div class=\"col-lg-6 main-title\">\r\n                <h1>{{ title }}</h1>\r\n                <agm-map [latitude]=\"lat\" [longitude]=\"lng\" [zoom]=\"zoom\">\r\n                    <agm-marker [latitude]=\"lat\" [longitude]=\"lng\">\r\n                        <agm-info-window><strong>Punto di Distribuzione - Zona Belluno</strong></agm-info-window>\r\n                    </agm-marker>\r\n                </agm-map>\r\n                <div style=\"color:white\" font-size=\"large\">\r\n                    presso lo <a href=\" https://www.spazioex.com/\">Spazio EX – Ex Caserma Piave</a><br />\r\n                    Via Tiziano Vecellio, 82/E<br />\r\n                    ​32100 ​Belluno (BL)<br />\r\n                    <p class=\"font-italic\">​di fronte a Kiwisport </p>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</section>"

/***/ }),

/***/ "./src/app/dovesiamo/dovesiamo.component.ts":
/*!**************************************************!*\
  !*** ./src/app/dovesiamo/dovesiamo.component.ts ***!
  \**************************************************/
/*! exports provided: DovesiamoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DovesiamoComponent", function() { return DovesiamoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var DovesiamoComponent = /** @class */ (function () {
    function DovesiamoComponent() {
        this.title = 'Dove Siamo:';
        this.zoom = 16;
        this.lat = 46.160810;
        this.lng = 12.239902;
    }
    DovesiamoComponent.prototype.ngOnInit = function () {
    };
    DovesiamoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-dovesiamo',
            template: __webpack_require__(/*! ./dovesiamo.component.html */ "./src/app/dovesiamo/dovesiamo.component.html"),
            styles: [__webpack_require__(/*! ./dovesiamo.component.css */ "./src/app/dovesiamo/dovesiamo.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], DovesiamoComponent);
    return DovesiamoComponent;
}());



/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section>\r\n    <div class=\"container\">\r\n        <div class=\"row\">\r\n            <div class=\"col-lg-6 main-title\">\r\n                <h1 class=\"mt-5\">Cooperativa Veneta Scout</h1>\r\n                <p> Punto di Distribuzione Zona Belluno<br />\r\n                    presso lo <a href=\" https://www.spazioex.com/\">Spazio EX – Ex Caserma Piave</a><br />\r\n                    Via Tiziano Vecellio, 82/E<br />\r\n                    ​32100 ​Belluno (BL)<br />\r\n                    <p class=\"font-italic\">​di fronte a Kiwisport </p>\r\n                    <p> Aperto il sabato dalle 15:30 alle 18:30</p>\r\n                    <p> Prossime aperture:</p>\r\n                    <table class=\"table table-striped table-dark\">\r\n                        <thead>\r\n                            <tr>\r\n                                <th scope=\"col\">Data</th>\r\n                                <th scope=\"col\">Orario</th>\r\n                            </tr>\r\n                        </thead>\r\n                        <tbody>\r\n                            <tr *ngFor=\"let item of dateApertura\">\r\n                                <td>{{item.data | date: 'yyyy-MM-dd'}}</td>\r\n                                <td *ngIf=\"item.orario\" [ngClass]=\"item.style\">{{item.orario}}</td>\r\n                                <td *ngIf=\"!item.orario\" class=\"bg-danger\">Chiuso</td>\r\n                            </tr>\r\n                        </tbody>\r\n                    </table>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</section>"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_orari_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/orari.service */ "./src/app/services/orari.service.ts");



var HomeComponent = /** @class */ (function () {
    function HomeComponent(orariService) {
        this.orariService = orariService;
        this.dateApertura = [];
    }
    HomeComponent.prototype.ngOnInit = function () {
        this.dateApertura = this.orariService.getOrari();
    };
    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/home.component.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_orari_service__WEBPACK_IMPORTED_MODULE_2__["OrariService"]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/page-not-found.component.html":
/*!***********************************************!*\
  !*** ./src/app/page-not-found.component.html ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section>\r\n    <div class=\"container\">\r\n        <div class=\"row\">\r\n            <div class=\"col-lg-6 main-title\">\r\n                <h1 class=\"mt-5\">Pagina non trovata</h1>\r\n\r\n            </div>\r\n        </div>\r\n    </div>\r\n</section>"

/***/ }),

/***/ "./src/app/page-not-found.component.ts":
/*!*********************************************!*\
  !*** ./src/app/page-not-found.component.ts ***!
  \*********************************************/
/*! exports provided: PageNotFoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageNotFoundComponent", function() { return PageNotFoundComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var PageNotFoundComponent = /** @class */ (function () {
    function PageNotFoundComponent() {
    }
    PageNotFoundComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-page-not-found',
            template: __webpack_require__(/*! ./page-not-found.component.html */ "./src/app/page-not-found.component.html"),
        })
    ], PageNotFoundComponent);
    return PageNotFoundComponent;
}());



/***/ }),

/***/ "./src/app/services/articoli.service.ts":
/*!**********************************************!*\
  !*** ./src/app/services/articoli.service.ts ***!
  \**********************************************/
/*! exports provided: ArticoliService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArticoliService", function() { return ArticoliService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var ArticoliService = /** @class */ (function () {
    function ArticoliService(httpService) {
        var _this = this;
        this.httpService = httpService;
        this.articoli = [];
        this.httpService.get('./assets/giacenza.json').subscribe(function (data) {
            _this.articoli = data; // FILL THE ARRAY WITH DATA.
        }, function (err) {
            console.log(err.message);
        });
    }
    ArticoliService.prototype.getArticoli = function () {
        return this.articoli;
    };
    ArticoliService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], ArticoliService);
    return ArticoliService;
}());



/***/ }),

/***/ "./src/app/services/orari.service.ts":
/*!*******************************************!*\
  !*** ./src/app/services/orari.service.ts ***!
  \*******************************************/
/*! exports provided: OrariService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrariService", function() { return OrariService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var OrariService = /** @class */ (function () {
    function OrariService(httpService) {
        var _this = this;
        this.httpService = httpService;
        this.startDate = new Date();
        this.defaultOrario = '15:00-18:00';
        this.dateApertura = [];
        this.dateChiusura = [];
        this.httpService.get('./assets/orari.json').subscribe(function (data) {
            _this.dateChiusura = data; // FILL THE ARRAY WITH DATA.
            _this.buildOrari();
            console.log(_this.dateApertura);
            console.log(_this.dateChiusura);
        }, function (err) {
            console.log(err.message);
        });
    }
    OrariService.prototype.buildOrari = function () {
        //trova i prossimo sabato a partire da oggi
        while (this.startDate.getDay() != 6) {
            this.startDate.setDate(this.startDate.getDate() + 1);
        }
        var _loop_1 = function () {
            var data = new Date(this_1.startDate);
            var orario = this_1.defaultOrario;
            var style = '';
            // trova correzioni all'orario standard
            var obj = this_1.dateChiusura.find(function (o) { return o.data === data.toISOString().substring(0, 10); });
            if (obj) {
                orario = obj.orario;
                if (orario !== this_1.defaultOrario) {
                    style = 'bg-warning';
                }
            }
            this_1.dateApertura.push({ data: data, orario: orario, style: style });
            this_1.startDate.setDate(this_1.startDate.getDate() + 7);
        };
        var this_1 = this;
        //crea l'elenco dei prossimi 4 sabati
        while (this.dateApertura.length < 4) {
            _loop_1();
        }
    };
    OrariService.prototype.getOrari = function () {
        console.log(JSON.stringify(this.dateApertura));
        return this.dateApertura;
    };
    OrariService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], OrariService);
    return OrariService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\Repository\CVSBelluno\Web\cvsbelluno\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map