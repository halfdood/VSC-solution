import { Injectable } from '@angular/core'


import { Url } from '../model/url';


@Injectable()
export class SharedService {


    constructor(public url: Url){}
}