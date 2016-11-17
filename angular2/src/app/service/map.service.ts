import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';


import { SharedService } from '../service/shared.service';


import { Point } from '../model/point';


@Injectable()
export class MapService {
    constructor(
        private http: Http,
        private sharedService: SharedService
    ){}

    getPoints(): Promise<Point[]> {
        var url = `${this.sharedService.url.logbook}/points`;
        var headers = { headers: this.sharedService.jsonHeaders };
        return this.http
            .get(url, headers)
            .toPromise()
            .then(response => {
                return response.json().data as Point[];
            })
            .catch(this.handleError);
    }

    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error);
        return Promise.reject(error.message || error);
    }
}