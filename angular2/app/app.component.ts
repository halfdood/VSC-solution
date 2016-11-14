import { Component } from '@angular/core';


import { LoginService } from './service/login.service';


@Component({
    selector: 'my-app',
    template: `
        <div *ngIf="loginSerivce.isLoggedIn()" class="content">
            <h1>{{title}}</h1>
            <nav>
                <a routerLink="/logbook" routerLinkActive="active">Logbook</a>
                <a routerLink="/map" routerLinkActive="active">Heroes</a>
            </nav>
        </div>
        <div *ngIf="!loginSerivce.isLoggedIn()">
            <login></login>
        </div>
        <router-outlet></router-outlet>
    `,
    styleUrls: ['app/app.component.css']
})
export class AppComponent {
    title = 'Logbook';


    constructor(private loginSerivce: LoginService){}
}