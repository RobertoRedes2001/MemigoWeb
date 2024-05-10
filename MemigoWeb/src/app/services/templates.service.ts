import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Template } from '../interfaces/templates.interfaces';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TemplatesService {

  constructor(public http: HttpClient) { }

  private apiHead : string = "http://localhost:8080/";
  localtk = localStorage.getItem("JWT_TOKEN");
  token =  JSON.parse(this.localtk?? 'null');
  private headers = new HttpHeaders({
    'Authorization': `Bearer ${this.token}`
  });

  public getTemplates(): Observable<Template[]> {
    return this.http.get<Template[]>(this.apiHead+'api/templates',{ headers: this.headers });
  }

}
