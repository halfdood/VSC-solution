"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var http_1 = require('@angular/http');
require('rxjs/add/operator/toPromise');
var shared_service_1 = require('../service/shared.service');
var LoginService = (function () {
    function LoginService(http, sharedService) {
        this.http = http;
        this.sharedService = sharedService;
        this.heroesUrl = 'app/heroes';
    }
    LoginService.prototype.canActivate = function (route, state) {
        return this.isLoggedIn();
    };
    LoginService.prototype.isLoggedIn = function () {
        return this.user != null;
    };
    LoginService.prototype.logIn = function (username, password) {
        var _this = this;
        var url = this.sharedService.url.login;
        var data = JSON.stringify({ username: username, password: password });
        var headers = { headers: this.sharedService.jsonHeaders };
        return this.http
            .post(url, data, headers)
            .toPromise()
            .then(function (res) {
            var r = res.json();
            if (r.success) {
                _this.user = r.data;
                return r.data;
            }
            else {
                Promise.reject('Log in failed.');
            }
        })
            .catch(this.handleError);
    };
    // create(name: string): Promise<Hero> {
    //     return this.http
    //         .post(this.heroesUrl, JSON.stringify({name: name}), {headers: this.headers})
    //         .toPromise()
    //         .then(res => res.json().data)
    //         .catch(this.handleError);
    // }
    // delete(id: number): Promise<void> {
    //     const url = `${this.heroesUrl}/${id}`;
    //     return this.http.delete(url, {headers: this.headers})
    //         .toPromise()
    //         .then(() => null)
    //         .catch(this.handleError);
    // }
    // getHero(id: number): Promise<Hero> {
    //     return this.getHeroes()
    //         .then(heroes => heroes.find(hero => hero.id === id));
    // }
    // getHeroes(): Promise<Hero[]> {
    //     return this.http.get(this.heroesUrl)
    //         .toPromise()
    //         .then(response => response.json().data as Hero[])
    //         .catch(this.handleError);
    // }
    // update(hero: Hero): Promise<Hero> {
    //     const url = `${this.heroesUrl}/${hero.id}`;
    //     return this.http
    //         .put(url, JSON.stringify(hero), {headers: this.headers})
    //         .toPromise()
    //         .then(() => hero)
    //         .catch(this.handleError);
    // }
    LoginService.prototype.handleError = function (error) {
        console.error('An error occurred while communicating with the server', error);
        return Promise.reject(error.message || error);
    };
    LoginService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http, shared_service_1.SharedService])
    ], LoginService);
    return LoginService;
}());
exports.LoginService = LoginService;
//# sourceMappingURL=login.service.js.map