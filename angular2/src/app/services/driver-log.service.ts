import { Injectable } from '@angular/core'
import { Headers, Http } from '@angular/http';


import 'rxjs/add/operator/toPromise';


import { DriverLog } from '../model/driver-log';


@Injectable()
export class DriverLogService {
    private headers = new Headers({'Content-Type': 'application/json'});
    private logUrl = 'http://localhost:62679/api/log';


    constructor(private http: Http){}


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

    geLog(id: number): Promise<DriverLog> {
        return this.http.get(this.logUrl + '/' + id)
            .toPromise()
            .then(response => response.json() as DriverLog)
            .catch(this.handleError);
    }

    getLogs(): Promise<DriverLog[]> {
        return this.http.get(this.logUrl)
            .toPromise()
            .then(response => {
                response.json() as DriverLog[]
            })
            .catch(this.handleError);
    }

    // update(hero: Hero): Promise<Hero> {
    //     const url = `${this.heroesUrl}/${hero.id}`;
    //     return this.http
    //         .put(url, JSON.stringify(hero), {headers: this.headers})
    //         .toPromise()
    //         .then(() => hero)
    //         .catch(this.handleError);
    // }

    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error);
        return Promise.reject(error.message || error);
    }
}