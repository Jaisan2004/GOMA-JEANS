import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MarcaService {
  private myAppUrl:string;
  private myApiUrl:string;

  constructor(private http: HttpClient) {
    this.myAppUrl = environment.endpoint;
    this.myApiUrl = 'api/marca/';
   }

   getMarcas(): Observable<any> {
     return this.http.get(`${this.myAppUrl}${this.myApiUrl}`);
   }
}
