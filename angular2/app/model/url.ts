import {Injectable} from '@angular/core';

@Injectable()
export class Url {
    public login: string = 'http://localhost:5000/api/user/signin';
    public logout: string = 'http://localhost:5000/api/user/signout';
    public user: string = 'http://localhost:5000/api/user';
}