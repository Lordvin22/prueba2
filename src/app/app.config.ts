import { Injectable } from '@angular/core';

@Injectable()
export class AppConfig {
    static readonly api_local: string       = 'http://localhost/proyecto/API/controllers/';
    static api_url: string                  = AppConfig.api_local;
    static production: boolean              = false; 
    static development: boolean             = true;
}