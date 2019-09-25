import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';

import { newfollow } from './newfollow.model';
import {map} from 'rxjs/operators';
import { Observable } from 'rxjs';


const block_user='http://localhost:9088/blocked/blockuser';
const delete_block='http://localhost:9088/blocked/delete';
const endpoint='http://localhost:9088/blocked/allblocked';
const httpOptions={
  headers: new HttpHeaders({
      'Content-Type' : 'application/json'
  })
};
@Injectable({
  providedIn: 'root'
})
export class BlockedService {

  constructor(private http: HttpClient) { }
  
  private extractData(res : Response){
    let contents=res;
    //check if contents are not null
    return contents || { };
}

getblocked(username):Observable<any>{
  console.log("service");
  return this.http.get(endpoint + "/" + username).pipe(map(this.extractData));
}

}
