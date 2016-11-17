import {Injectable} from '@angular/core';

@Injectable()
export class Url {
    public logbook: string = 'api/logbook';
    public login: string = 'api/user/signin';
    public logout: string = 'user/signout';
    public user: string = 'api/user';
}