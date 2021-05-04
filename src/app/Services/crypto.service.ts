import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class CryptoService {

  constructor(private http:HttpClient) { }

GetCryptoData():Observable<any>{
  return this.http.get('https://jsonblob.com/api/jsonblob/d4f65a58-acfd-11eb-8e44-0b417dc3dfdf')
}

}
