import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Meme } from '../interfaces/meme.interfaces';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MemesService {

  constructor(public http: HttpClient) { }

  public getMemes(): Observable<Meme[]> {
    return this.http.get<Meme[]>('http://localhost:8080/api/memes');
  }

  public getById(id: number): Observable<Meme> {
    return this.http.get<Meme>('http://localhost:8080/api/memes/'+id);
  }

  public getByUser(uid: number): Observable<Meme> {
    return this.http.get<Meme>('http://localhost:8080/api/memes/byuser/'+uid);
  }

  public addMeme(Meme: any): Observable<any> {
    return this.http.post('http://localhost:8080/api/memes/add', Meme)
      .pipe(
        catchError(error => {
          throw error; // Propagar el error
        })
      );
  }

  deleteMeme(id: number): Observable<string> {
    return this.http.delete('http://localhost:8080/api/memes/delete/' + id, { responseType: 'text' })
      .pipe(
        map(response => response),
        catchError(error => {
          throw error;
        })
      );
  }

}
