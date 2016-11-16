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
var logbook_service_1 = require('../../service/logbook.service');
var LogbookComponent = (function () {
    function LogbookComponent(logbookService) {
        this.logbookService = logbookService;
        this.logs = [];
    }
    LogbookComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.logbookService.get()
            .then(function (logs) {
            _this.logs = logs;
        });
    };
    LogbookComponent = __decorate([
        core_1.Component({
            selector: 'logbook',
            templateUrl: 'app/component/logbook/logbook.component.html',
            styleUrls: ['app/component/logbook/logbook.component.css']
        }), 
        __metadata('design:paramtypes', [logbook_service_1.LogbookService])
    ], LogbookComponent);
    return LogbookComponent;
}());
exports.LogbookComponent = LogbookComponent;
//# sourceMappingURL=logbook.component.js.map