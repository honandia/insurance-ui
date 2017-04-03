import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';

import { User } from '../_models/index';

@Injectable()
export class PolicyService {
    constructor(private http: Http) { }

    getAll() {
        return this.http.get('http://localhost:51799/api/policies/', this.jwt()).map((response: Response) => response.json());
    }
    getByName(name: string) {
        return this.http.get('http://localhost:51799/api/policies/username/' + name, this.jwt()).map((response: Response) => response.json());
    }

    // private helper methods

    private jwt() {
        // create authorization header with jwt access_token
        let currentUser = JSON.parse(localStorage.getItem('currentUser'));
        if (currentUser && currentUser.access_token) {
            let headers = new Headers({ 'Authorization': 'Bearer ' + currentUser.access_token });
            return new RequestOptions({ headers: headers });
        }
    }
}