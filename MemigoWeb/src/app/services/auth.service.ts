import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Router } from '@angular/router';
import { jwtDecode } from 'jwt-decode';
import { BehaviorSubject, Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private readonly JWT_TOKEN = "JWT_TOKEN";
  private loggedUser? : string;
  private isAuthenticatedSubject = new BehaviorSubject<boolean>(false);
  private http = inject(HttpClient);
  roterService = inject(Router);

  constructor() { }

  login(user:{uid:string,password:string}):Observable<any>{
    return this.http.post('http://localhost:8080/login',user).pipe(
      tap((tokens:any)=>this.doLoginUser(user.uid,JSON.stringify(tokens.token)))
    );
  }

  private doLoginUser(uid: string, token: any ){
    this.loggedUser = uid;
    this.storeJWT(token);
    this.isAuthenticatedSubject.next(true);
  }

  setCurrentUser(): void{
    console.log(this.loggedUser)
    localStorage.setItem("currentUser",this.loggedUser??'');
  }

  private storeJWT(jwt:string){
    localStorage.setItem(this.JWT_TOKEN,jwt);
  }

  logout(){
    localStorage.removeItem(this.JWT_TOKEN);
    this.isAuthenticatedSubject.next(false);
    this.roterService.navigate(['/login']);
  }

  isLoggedIn(){
    return !!localStorage.getItem(this.JWT_TOKEN);
  }

  isTokenExpired(){
    const tokens = localStorage.getItem(this.JWT_TOKEN);
    if(!tokens) return true;
    const token = JSON.parse(tokens).access_token;
    const decoded = jwtDecode(token);
    if(!decoded.exp) return true;
    const expirationDate = decoded.exp * 1000;
    const now = new Date().getTime();

    return expirationDate < now;
  }

}
