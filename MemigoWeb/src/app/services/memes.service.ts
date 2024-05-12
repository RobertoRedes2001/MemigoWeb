import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Meme } from '../interfaces/meme.interfaces';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MemesService {

  constructor(public http: HttpClient) { }
  private apiHead : string = "http://localhost:8080/";
  localtk = localStorage.getItem("JWT_TOKEN");
  token =  JSON.parse(this.localtk?? 'null');
  private headers = new HttpHeaders({
    'Authorization': `Bearer ${this.token}`
  });

  public getMemes(): Observable<Meme[]> {
    return this.http.get<Meme[]>(this.apiHead+'api/memes',{ headers: this.headers });
  }

  public getById(id: number): Observable<Meme> {
    return this.http.get<Meme>(this.apiHead+'api/memes/'+id,{ headers: this.headers });
  }

  public getByUser(uid: number): Observable<Meme> {
    return this.http.get<Meme>(this.apiHead+'api/memes/byuser/'+uid,{ headers: this.headers });
  }

  public addMeme(meme: any): Observable<any> {
    return this.http.post(this.apiHead+'api/memes/add', meme,{ headers: this.headers })
      .pipe(
        catchError(error => {
          throw error; // Propagar el error
        })
      );
  }

  public setLike(id: number): Observable<Meme> {
    return this.http.put<Meme>(this.apiHead+'api/memes/like/'+id, null, { headers: this.headers }).pipe(
      map(response => response),
      catchError(error => {
        throw error;
      })
    );
  }
  
  public setDislike(id: number): Observable<Meme> {
    return this.http.put<Meme>(this.apiHead+'api/memes/dislike/'+id, null, { headers: this.headers }).pipe(
      map(response => response),
      catchError(error => {
        throw error;
      })
    );
  }
  
  deleteMeme(id: number): Observable<string> {
    return this.http.delete(this.apiHead+'api/memes/delete/' + id, { headers: this.headers,responseType: 'text' })
      .pipe(
        map(response => response),
        catchError(error => {
          throw error;
        })
      );
  }

}
