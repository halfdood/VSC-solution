import { Injectable } from '@angular/core'
import { Headers } from '@angular/http';


import { Url } from '../model/url';


@Injectable()
export class SharedService {
    public jsonHeaders = new Headers({'Content-Type': 'application/json'});


    constructor(public url: Url){}
}