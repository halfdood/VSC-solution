import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';


import { SharedService } from '../service/shared.service';


import { Logbook } from '../model/logbook';


@Injectable()
export class LogbookService {
    constructor(
        private http: Http,
        private sharedService: SharedService
    ){}


    getLogs(): Promise<Logbook[]> {
        var url = this.sharedService.url.logbook;
        var headers = { headers: this.sharedService.jsonHeaders };
        return this.http
            .get(url, headers)
            .toPromise()
            .then(response => {
                return response.json().data as Logbook[];
            })
            .catch(this.handleError);
    }

    getLog(id: number): Promise<Logbook> {
        const url = `${this.sharedService.url.logbook}/${id}`;
        const headers = { headers: this.sharedService.jsonHeaders };
        return this.http
            .get(url, headers)
            .toPromise()
            .then(response => {
                return response.json().data as Logbook;
            })
            .catch(this.handleError);
    }

    update(log: Logbook): Promise<Logbook> {
        const url = `${this.sharedService.url.logbook}/${log.id}`;
        const headers = { headers: this.sharedService.jsonHeaders };
        return this.http
            .put(url, JSON.stringify(log), headers)
            .toPromise()
            .then(() => log)
            .catch(this.handleError);
    }

    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error);
        return Promise.reject(error.message || error);
    }
}