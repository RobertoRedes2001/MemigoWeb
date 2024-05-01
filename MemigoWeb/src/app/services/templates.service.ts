import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Template } from '../interfaces/templates.interfaces';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TemplatesService {

  constructor(public http: HttpClient) { }

  public getTemplates(): Observable<Template[]> {
    return this.http.get<Template[]>('http://localhost:8080/api/templates');
  }

}
