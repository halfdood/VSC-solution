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
var forms_1 = require('@angular/forms');
var router_1 = require('@angular/router');
var login_service_1 = require('../../service/login.service');
var LoginComponent = (function () {
    function LoginComponent(fb, loginService, router) {
        this.loginService = loginService;
        this.router = router;
        this.submitted = false;
        this.form = fb.group({
            'name': [''],
            'password': ['']
        });
        this.username = this.form.controls['name'];
        this.password = this.form.controls['password'];
    }
    LoginComponent.prototype.onSubmit = function (values) {
        var _this = this;
        this.submitted = true;
        if (this.form.valid) {
            this.loginService.logIn(this.username.value, this.password.value)
                .then(function (success) {
                if (success) {
                    _this.router.navigateByUrl('');
                }
            });
        }
    };
    LoginComponent = __decorate([
        core_1.Component({
            selector: 'login',
            encapsulation: core_1.ViewEncapsulation.None,
            templateUrl: './app/component/login/login.component.html',
            styleUrls: ['./app/component/login/login.component.css']
        }), 
        __metadata('design:paramtypes', [forms_1.FormBuilder, login_service_1.LoginService, router_1.Router])
    ], LoginComponent);
    return LoginComponent;
}());
exports.LoginComponent = LoginComponent;
//# sourceMappingURL=login.component.js.map