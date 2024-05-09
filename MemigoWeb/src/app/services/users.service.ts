import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../interfaces/user.interfaces';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(public http: HttpClient) { }

  private apiHead : string = "http://localhost:8080/";
  localtk = localStorage.getItem("JWT_TOKEN");
  token =  JSON.parse(this.localtk?? 'null');
  private headers = new HttpHeaders({
    'Authorization': `Bearer ${this.token}`
  });

  currentUser : User | null = null;

  public getCurrentUser() : any {
    return this.currentUser;   
  }

  public setCurrentUser(user:User) : void {
    this.currentUser=user;
  }

  public getUsers(): Observable<User[]> {
    console.log(this.headers)
    return this.http.get<User[]>(this.apiHead+'api/users',{ headers: this.headers });
  }

  public getById(id: number): Observable<User> {
    return this.http.get<User>(this.apiHead+'api/users/'+id,{ headers: this.headers });
  }

  public getByUid(uid: string): Observable<User> {
    return this.http.get<User>(this.apiHead+'api/users/byuid?uid='+uid,{ headers: this.headers });
  }

  public addUser(user: any): Observable<any> {
    return this.http.post(this.apiHead+'api/users/add', user)
      .pipe(
        catchError(error => {
          throw error; // Propagar el error
        })
      );
  }

  public updateUser(user: any): Observable<any> {
    return this.http.put(this.apiHead+'api/users/update', user,{ headers: this.headers })
      .pipe(
        catchError(error => {
          throw error; // Propagar el error
        })
      );
  }

  deleteUser(id: number): Observable<string> {
    return this.http.delete(this.apiHead+'api/users/delete/' + id, { headers: this.headers, responseType: 'text' })
      .pipe(
        map(response => response),
        catchError(error => {
          throw error;
        })
      );
  }

}
