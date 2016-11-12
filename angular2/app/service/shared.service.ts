import { Injectable } from '@angular/core'


import { Url } from '../model/url';


@Injectable()
export class SharedService {
    url: Url;


    constructor(){}
}