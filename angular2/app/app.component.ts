import { Component } from '@angular/core';


import { LoginService } from './service/login.service';


@Component({
    selector: 'my-app',
    template: `
        <h1>{{title}}</h1>
        <div *ngIf="loginSerivce.isLoggedIn()">
            <nav>
                <!--<a routerLink="/dashboard" routerLinkActive="active">Dashboard</a>-->
                <!--<a routerLink="/heroes" routerLinkActive="active">Heroes</a>-->
            </nav>
            <router-outlet></router-outlet>
        </div>
        <div *ngIf="!loginSerivce.isLoggedIn()">
            <login></login>
        </div>
    `,
    styleUrls: ['app/app.component.css']
})
export class AppComponent {
    title = 'Logbook';


    constructor(private loginSerivce: LoginService){}
}