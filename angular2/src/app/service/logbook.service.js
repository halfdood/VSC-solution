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
var shared_service_1 = require('../service/shared.service');
var LogbookService = (function () {
    function LogbookService(http, sharedService) {
        this.http = http;
        this.sharedService = sharedService;
    }
    LogbookService.prototype.get = function () {
        var url = this.sharedService.url.logbook;
        var headers = { headers: this.sharedService.jsonHeaders };
        return this.http
            .get(url, headers)
            .toPromise()
            .then(function (response) {
            return response.json().data;
        })
            .catch(this.handleError);
    };
    LogbookService.prototype.handleError = function (error) {
        console.error('An error occurred', error);
        return Promise.reject(error.message || error);
    };
    LogbookService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http, shared_service_1.SharedService])
    ], LogbookService);
    return LogbookService;
}());
exports.LogbookService = LogbookService;
//# sourceMappingURL=logbook.service.js.map