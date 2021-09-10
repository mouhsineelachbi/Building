import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { map, tap, switchMap } from "rxjs/operators";
import { User } from 'src/app/models/user/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  // sign up method 
  signUp(user: User){
    return this.http.post<any>('http://localhost:3000/users', user).pipe(
      tap(user => console.log(user)),
      map(user => user)
    )
  }

  // sign in method 
  signIn(){

  }

  // sign out method 
  signOut(){

  }
}
