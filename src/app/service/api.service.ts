import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AppConfig } from '../app.config';

@Injectable({
    providedIn: 'root'
})
export class ApiService {
    api_url: string = '';

    constructor(
        public http: HttpClient,
    ) {
        this.api_url = AppConfig.api_url;
    }

    get(params): any {
        return this.http.get(AppConfig.api_url + params.url, { params:params });
    }
}