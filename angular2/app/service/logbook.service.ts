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


    get(): Promise<Logbook[]> {
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

    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error);
        return Promise.reject(error.message || error);
    }
}