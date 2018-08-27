import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class ApiProvider {

  private _apiUrl:string = "http://10.3.140.91:3000/";


  constructor(private _http: HttpClient) {

  }

  get apiUrl(){
    return this._apiUrl;
  }

}
