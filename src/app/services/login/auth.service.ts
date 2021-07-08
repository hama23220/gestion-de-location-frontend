import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable, of, Subject } from "rxjs";
import { environment } from "src/environments/environment";
import { TokenStorageService } from "../interceptor/token-storage.service";

const AUTH_API = environment.baseURL;
const httpOptions = {
  headers: new HttpHeaders({ "Content-Type": "application/json" }),
};

@Injectable({
  providedIn: "root",
})
export class AuthService {
  user: any;
  constructor(
    private http: HttpClient,
    private tokenStorageService: TokenStorageService
  ) {
    this.user = this.tokenStorageService.getUser();
  }

  login(credentials): Observable<any> {
    return this.http.post(
      AUTH_API + "authenticate",
      {
        login: credentials.login,
        password: credentials.password,
      },
      httpOptions
    );
  }

  public signOut(): void {
    window.sessionStorage.clear();
  }

 // public getUser(): Observable<User> {
 //   return of({
  //    prenom: this.user.prenom,
  //    nom: this.user.nom,
  //  });
 // }

  private _listners = new Subject<any>();
  listen(): Observable<any> {
    return this._listners.asObservable();
  }
  filter(filterBy: string) {
    this._listners.next(filterBy);
  }
}
