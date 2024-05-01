import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../interfaces/user.interfaces';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(public http: HttpClient) { }

  public getUsers(): Observable<User[]> {
    return this.http.get<User[]>('http://localhost:8080/api/users');
  }

  public getLogin(): Observable<User[]> {
    return this.http.get<User[]>('http://localhost:8080/api/users/login');
  }

  public getById(id: number): Observable<User> {
    return this.http.get<User>('http://localhost:8080/api/users/'+id);
  }

  public getByUid(uid: number): Observable<User> {
    return this.http.get<User>('http://localhost:8080/api/users/byuid/'+uid);
  }

  public addUser(user: any): Observable<any> {
    return this.http.post('http://localhost:8080/api/users/add', user)
      .pipe(
        catchError(error => {
          throw error; // Propagar el error
        })
      );
  }

  public updateUser(user: any): Observable<any> {
    return this.http.put('http://localhost:8080/api/users/update', user)
      .pipe(
        catchError(error => {
          throw error; // Propagar el error
        })
      );
  }

  deleteUser(id: number): Observable<string> {
    return this.http.delete('http://localhost:8080/api/users/delete/' + id, { responseType: 'text' })
      .pipe(
        map(response => response),
        catchError(error => {
          throw error;
        })
      );
  }

}
