import { Injectable } from "@angular/core";
import { Observable, delay, of, tap } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class AuthService {
  isLoggedIn: boolean = false;
  redirectUrl: string;

  constructor() {}

  login(name: string, password: string): Observable<boolean> {
    const isLogggeIn = name == "pikachu" && password == "pikachu";
    return of(isLogggeIn).pipe(
      delay(1000),
      tap((isLogggeIn) => (this.isLoggedIn = isLogggeIn))
    );
  }

  logout() {
    this.isLoggedIn = false;
  }
}
