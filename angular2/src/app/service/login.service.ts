import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';


import 'rxjs/add/operator/toPromise';


import { SharedService } from '../service/shared.service';


import { User } from '../model/user';


@Injectable()
export class LoginService implements CanActivate {
    private heroesUrl = 'app/heroes';
    private user: User;


    constructor(
        private http: Http,
        private sharedService: SharedService
    ){}


    canActivate(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ): Observable<boolean>|Promise<boolean>|boolean {
        return this.isLoggedIn();
    }

    isLoggedIn(): boolean {
        return this.user != null;
    }

    logIn(username: string, password: string): Promise<boolean> {
        var url = this.sharedService.url.login;
        var data = JSON.stringify({ username, password });
        var headers = { headers: this.sharedService.jsonHeaders };

        return this.http
            .post(url, data, headers)
            .toPromise()
            .then(res =>{
                var r = res.json();
                if (r.success) {
                    this.user = r.data;
                    return r.data;
                } else {
                    Promise.reject('Log in failed.');
                }
            })
            .catch(this.handleError);
    }

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

    private handleError(error: any): Promise<any> {
        console.error('An error occurred while communicating with the server', error);
        return Promise.reject(error.message || error);
    }
}